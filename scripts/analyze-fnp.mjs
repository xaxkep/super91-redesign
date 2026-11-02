import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '../visual-audit/fnp-comparison');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  console.log('Fetching fnp.com via Headless Edge...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
  );

  // Desktop Viewport
  await page.setViewport({ width: 1440, height: 900 });
  try {
    const res = await page.goto('https://www.fnp.com', { waitUntil: 'networkidle2', timeout: 35000 });
    console.log('FNP status:', res ? res.status() : 'loaded');
    await new Promise((r) => setTimeout(r, 2500));

    await page.screenshot({
      path: path.join(outDir, 'fnp-desktop-hero.png'),
      clip: { x: 0, y: 0, width: 1440, height: 950 },
    });

    // Scroll down to products
    await page.evaluate(() => window.scrollBy(0, 900));
    await new Promise((r) => setTimeout(r, 1500));

    await page.screenshot({
      path: path.join(outDir, 'fnp-desktop-products.png'),
      clip: { x: 0, y: 0, width: 1440, height: 950 },
    });

    // Mobile Viewport
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
    await page.goto('https://www.fnp.com', { waitUntil: 'networkidle2', timeout: 35000 });
    await new Promise((r) => setTimeout(r, 2000));

    await page.screenshot({
      path: path.join(outDir, 'fnp-mobile-hero.png'),
      clip: { x: 0, y: 0, width: 375, height: 812 },
    });

    // Collect DOM metrics
    const fnpMetrics = await page.evaluate(() => {
      const allButtons = Array.from(document.querySelectorAll('button'));
      const allImages = Array.from(document.querySelectorAll('img'));
      const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4'));

      return {
        title: document.title,
        heading1: document.querySelector('h1')?.innerText || 'None',
        headingsSample: allHeadings.slice(0, 10).map((h) => ({ tag: h.tagName, text: h.innerText.slice(0, 50) })),
        buttonCount: allButtons.length,
        buttonsWithoutLabel: allButtons.filter((b) => !b.innerText && !b.getAttribute('aria-label') && !b.getAttribute('title')).length,
        imageCount: allImages.length,
        imagesWithoutAlt: allImages.filter((i) => !i.hasAttribute('alt') || !i.getAttribute('alt').trim()).length,
        metaThemeColor: document.querySelector('meta[name="theme-color"]')?.getAttribute('content') || 'None',
      };
    });

    fs.writeFileSync(path.join(outDir, 'fnp-metrics.json'), JSON.stringify(fnpMetrics, null, 2));
    console.log('FNP analysis complete! Saved to visual-audit/fnp-comparison/');
  } catch (err) {
    console.error('Error during FNP inspection:', err.message);
  } finally {
    await browser.close();
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
