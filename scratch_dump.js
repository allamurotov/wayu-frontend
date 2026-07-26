const fs = require('fs');
const path = 'C:/Users/ikrom/AppData/Local/Temp/claude/C--Users-ikrom-Desktop-Wayu/edcdaad1-7a55-45c4-badf-071ff96d4aad/scratchpad/figma_full.json';
const raw = fs.readFileSync(path, 'utf8');
const data = JSON.parse(raw);

function findById(node, id) {
  if (node.id === id) return node;
  if (node.children) for (const c of node.children) { const r = findById(c, id); if (r) return r; }
  return null;
}

function summarize(node, depth, maxDepth) {
  if (maxDepth !== undefined && depth > maxDepth) return;
  const indent = '  '.repeat(depth);
  let line = `${indent}${node.type} "${node.name}" id=${node.id}`;
  if (node.absoluteBoundingBox) {
    const b = node.absoluteBoundingBox;
    line += ` [x=${Math.round(b.x)} y=${Math.round(b.y)} w=${Math.round(b.width)} h=${Math.round(b.height)}]`;
  }
  if (node.cornerRadius !== undefined) line += ` radius=${node.cornerRadius}`;
  if (node.type === 'TEXT') {
    line += ` text="${(node.characters||'').replace(/\n/g,'\\n')}"`;
    if (node.style) line += ` font=${node.style.fontFamily} size=${node.style.fontSize} weight=${node.style.fontWeight}`;
  }
  if (node.fills && node.fills.length && node.fills[0].type === 'SOLID' && node.fills[0].color) {
    const c = node.fills[0].color;
    const op = node.fills[0].opacity !== undefined ? node.fills[0].opacity : 1;
    line += ` fill=rgba(${Math.round(c.r*255)},${Math.round(c.g*255)},${Math.round(c.b*255)},${op})`;
  } else if (node.fills && node.fills.length && node.fills[0].type === 'IMAGE') {
    line += ` fill=IMAGE(${node.fills[0].imageRef})`;
  }
  if (node.strokes && node.strokes.length && node.strokes[0].color) {
    const c = node.strokes[0].color;
    line += ` stroke=rgba(${Math.round(c.r*255)},${Math.round(c.g*255)},${Math.round(c.b*255)},${c.a}) strokeWeight=${node.strokeWeight}`;
  }
  if (node.layoutMode) line += ` layout=${node.layoutMode} gap=${node.itemSpacing}`;
  if (node.visible === false) line += ` HIDDEN`;
  console.log(line);
  if (node.children) for (const c of node.children) summarize(c, depth + 1, maxDepth);
}

const node = findById(data.document, process.argv[2]);
if (!node) { console.log('NOT FOUND'); process.exit(1); }
summarize(node, 0, process.argv[3] ? parseInt(process.argv[3]) : undefined);
