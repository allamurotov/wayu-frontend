// Reconstructs a pixel-exact SVG for any Figma node directly from vector geometry,
// bypassing the Figma /v1/images render endpoint entirely (that endpoint has a very
// low rate limit on the starter plan and can lock out for days).
//
// Usage:
//   1. Fetch node data with exact path geometry (regular files API, not /v1/images):
//      curl -H "X-Figma-Token: $TOKEN" \
//        "https://api.figma.com/v1/files/{fileKey}/nodes?ids={rootNodeId}&geometry=paths" \
//        -o snapshot.json
//   2. node figma-node-to-svg.js snapshot.json <rootNodeId> <targetNodeId> out.svg
//
// Handles: VECTOR fillGeometry/strokeGeometry (exact bezier paths), solid + linear
// gradient fills, RECTANGLE/ELLIPSE, and FRAME/INSTANCE/COMPONENT background fills
// (needed e.g. for icon badges: a colored rounded-rect frame with a white icon inside).
// Skips nodes with visible:false or opacity:0 (Figma uses these for invisible hit-areas
// and unused duplicate layers left over from copy-pasted components).
const fs = require('fs');
const path = require('path');

function loadDoc(jsonFile, rootNodeId) {
  const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  return data.nodes[rootNodeId].document;
}

function find(node, id) {
  if (node.id === id) return node;
  if (node.children) for (const c of node.children) { const r = find(c, id); if (r) return r; }
  return null;
}

function rgb(c) {
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);
  if (c.a !== undefined && c.a < 1) return `rgba(${r},${g},${b},${c.a})`;
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
}

let gradCounter = 0;
function fillToSvg(fill, defs) {
  if (fill.type === 'SOLID') return rgb({ ...fill.color, a: fill.opacity !== undefined ? fill.opacity : fill.color.a });
  if (fill.type === 'GRADIENT_LINEAR') {
    const id = `grad${gradCounter++}`;
    const h = fill.gradientHandlePositions;
    const stops = fill.gradientStops
      .map((s) => `<stop offset="${s.position}" stop-color="${rgb(s.color)}" />`)
      .join('');
    defs.push(
      `<linearGradient id="${id}" x1="${h[0].x}" y1="${h[0].y}" x2="${h[1].x}" y2="${h[1].y}" gradientUnits="objectBoundingBox">${stops}</linearGradient>`,
    );
    return `url(#${id})`;
  }
  return 'none';
}

function offsetPath(d, dx, dy) {
  if (dx === 0 && dy === 0) return d;
  return `<g transform="translate(${dx} ${dy})">PLACEHOLDER</g>`;
}

function renderNode(node, rootBox, defs, out) {
  if (node.visible === false) return;
  if (node.opacity === 0) return;
  const b = node.absoluteBoundingBox;
  const dx = b ? b.x - rootBox.x : 0;
  const dy = b ? b.y - rootBox.y : 0;

  if (['FRAME', 'INSTANCE', 'COMPONENT', 'GROUP'].includes(node.type) && node.fills && node.fills.length) {
    const fills = node.fills.filter((f) => f.visible !== false);
    const rxVal = node.cornerRadius || 0;
    for (const fill of fills) {
      out.push(`<rect width="${b.width}" height="${b.height}" rx="${rxVal}" fill="${fillToSvg(fill, defs)}" transform="translate(${dx} ${dy})" />`);
    }
  }

  if (node.type === 'VECTOR' && node.fillGeometry && node.fillGeometry.length) {
    const fills = (node.fills || []).filter((f) => f.visible !== false);
    for (const fill of fills) {
      const fillAttr = fillToSvg(fill, defs);
      for (const g of node.fillGeometry) {
        out.push(`<path d="${g.path}" fill-rule="${g.windingRule === 'EVENODD' ? 'evenodd' : 'nonzero'}" fill="${fillAttr}" transform="translate(${dx} ${dy})" />`);
      }
    }
  } else if (node.type === 'VECTOR' && node.strokeGeometry && node.strokeGeometry.length) {
    const strokes = (node.strokes || []).filter((f) => f.visible !== false);
    for (const stroke of strokes) {
      const strokeAttr = fillToSvg(stroke, defs);
      for (const g of node.strokeGeometry) {
        out.push(`<path d="${g.path}" fill-rule="${g.windingRule === 'EVENODD' ? 'evenodd' : 'nonzero'}" fill="${strokeAttr}" transform="translate(${dx} ${dy})" />`);
      }
    }
  } else if (node.type === 'ELLIPSE' && node.fills) {
    const fills = (node.fills || []).filter((f) => f.visible !== false);
    const cx = b.width / 2, cy = b.height / 2, rx = b.width / 2, ry = b.height / 2;
    for (const fill of fills) {
      out.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fillToSvg(fill, defs)}" transform="translate(${dx} ${dy})" />`);
    }
  } else if (node.type === 'RECTANGLE' && node.fills) {
    const fills = (node.fills || []).filter((f) => f.visible !== false);
    const rxVal = node.cornerRadius || 0;
    for (const fill of fills) {
      out.push(`<rect width="${b.width}" height="${b.height}" rx="${rxVal}" fill="${fillToSvg(fill, defs)}" transform="translate(${dx} ${dy})" />`);
    }
  }

  if (node.children) {
    for (const c of node.children) renderNode(c, rootBox, defs, out);
  }
}

function exportSvg(jsonFile, rootNodeId, targetId) {
  const doc = loadDoc(jsonFile, rootNodeId);
  const target = find(doc, targetId);
  if (!target) throw new Error('node not found: ' + targetId);
  const rootBox = target.absoluteBoundingBox;
  const defs = [];
  const out = [];
  renderNode(target, rootBox, defs, out);
  return `<svg width="${rootBox.width}" height="${rootBox.height}" viewBox="0 0 ${rootBox.width} ${rootBox.height}" fill="none" xmlns="http://www.w3.org/2000/svg">\n<defs>${defs.join('')}</defs>\n${out.join('\n')}\n</svg>`;
}

module.exports = { exportSvg };

if (require.main === module) {
  const [jsonFile, rootNodeId, targetId, outFile] = process.argv.slice(2);
  const svg = exportSvg(jsonFile, rootNodeId, targetId);
  fs.writeFileSync(outFile, svg);
  console.log('wrote', outFile, svg.length, 'bytes');
}
