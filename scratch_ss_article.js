const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await page.goto('http://localhost:3000/news/afghanistan-negotiation-group', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'C:/Users/ikrom/Desktop/Wayu/Frontend/scratch_article_full.png', fullPage: true });
  await browser.close();
})();
