import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '../visual-audit');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  console.log('Launching Edge for Comprehensive Visual Audit...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  // Desktop Viewport
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  console.log('Navigating to http://localhost:3001...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });

  // Wait 1s for fonts & images to settle
  await new Promise((r) => setTimeout(r, 1200));

  console.log('Capturing Desktop Hero & Nav...');
  await page.screenshot({
    path: path.join(outDir, '01-desktop-hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 950 },
  });

  console.log('Opening Delivery Franchise Pincode Modal...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const pincodeBtn = btns.find((b) => b.textContent && b.textContent.includes('DF:'));
    if (pincodeBtn) pincodeBtn.click();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(outDir, '08-delivery-pincode-modal.png'),
    clip: { x: 0, y: 0, width: 1440, height: 950 },
  });
  // Close modal
  await page.evaluate(() => {
    const closeBtn = document.querySelector('button[aria-label="Close delivery modal"]');
    if (closeBtn) closeBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  console.log('Capturing Festival Curated Showcase...');
  const showcaseEl = await page.$('#festival-showcase');
  if (showcaseEl) {
    await showcaseEl.screenshot({
      path: path.join(outDir, '02-festival-showcase.png'),
    });
  }

  console.log('Capturing Hero Products Section...');
  const productsEl = await page.$('#hero-products');
  if (productsEl) {
    await productsEl.screenshot({
      path: path.join(outDir, '03-hero-products.png'),
    });
  }

  console.log('Capturing Tactile Finish Lab...');
  const tactileEl = await page.$('#tactile-lab');
  if (tactileEl) {
    await tactileEl.screenshot({
      path: path.join(outDir, '04-tactile-lab.png'),
    });
  }

  console.log('Opening Express Order Drawer...');
  // Click first Express Buy button
  await page.evaluate(() => {
    const buyBtns = Array.from(document.querySelectorAll('button'));
    const btn = buyBtns.find((b) => b.textContent && b.textContent.includes('Express Buy'));
    if (btn) {
      btn.scrollIntoView({ behavior: 'instant', block: 'center' });
      btn.click();
    }
  });
  await new Promise((r) => setTimeout(r, 1000));

  // Screenshot drawer container
  const drawerEl = await page.$('.fixed.inset-y-0.right-0');
  if (drawerEl) {
    await drawerEl.screenshot({
      path: path.join(outDir, '05-express-drawer-open.png'),
    });
  } else {
    await page.screenshot({
      path: path.join(outDir, '05-express-drawer-open.png'),
      clip: { x: 0, y: 0, width: 1440, height: 950 },
    });
  }

  console.log('Triggering Preflight Inspection Modal...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const demoBtn = btns.find((b) => b.textContent && b.textContent.includes('Load sample PDF'));
    if (demoBtn) demoBtn.click();
  });
  await new Promise((r) => setTimeout(r, 600));

  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const inspectBtn = btns.find((b) => b.textContent && b.textContent.includes('Inspect'));
    if (inspectBtn) inspectBtn.click();
  });
  await new Promise((r) => setTimeout(r, 800));

  const modalEl = await page.$('.fixed.inset-0.z-50');
  if (modalEl) {
    await modalEl.screenshot({
      path: path.join(outDir, '05b-preflight-modal.png'),
    });
  }

  // Mobile Viewport (iPhone 14 / standard 375px)
  console.log('Testing Mobile Viewport (375px)...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1000));

  await page.screenshot({
    path: path.join(outDir, '06-mobile-hero.png'),
    clip: { x: 0, y: 0, width: 375, height: 812 },
  });

  // Mobile Hero Product Specimen Card
  await page.evaluate(() => {
    window.scrollBy(0, 1100);
  });
  await new Promise((r) => setTimeout(r, 1200));

  const mobileCard = await page.$('.shadow-specimen');
  if (mobileCard) {
    await mobileCard.screenshot({
      path: path.join(outDir, '07-mobile-product.png'),
    });
  }

  // Automated Accessibility & Design Audit Checks in the real DOM
  console.log('Running DOM Accessibility & Design Audit...');
  const auditResults = await page.evaluate(() => {
    const results = {
      imagesWithoutAlt: [],
      buttonsWithoutLabel: [],
      lowTouchTargets: [],
    };

    // Images alt check
    document.querySelectorAll('img').forEach((img, idx) => {
      if (!img.hasAttribute('alt') || img.getAttribute('alt').trim() === '') {
        results.imagesWithoutAlt.push({ src: img.src.slice(0, 50), index: idx });
      }
    });

    // Buttons accessible label check
    document.querySelectorAll('button').forEach((btn, idx) => {
      const text = btn.innerText || btn.getAttribute('aria-label') || btn.getAttribute('title');
      if (!text || text.trim() === '') {
        results.buttonsWithoutLabel.push({ html: btn.outerHTML.slice(0, 80), index: idx });
      }
    });

    // Touch targets check (min 32x32 on mobile per WCAG 2.5.5 / 2.5.8)
    document.querySelectorAll('button, a, input, select').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        if (rect.height < 32 || rect.width < 32) {
          const text = el.innerText || el.getAttribute('aria-label') || el.tagName;
          results.lowTouchTargets.push({
            tag: el.tagName,
            text: text.slice(0, 30),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          });
        }
      }
    });

    return results;
  });

  fs.writeFileSync(path.join(outDir, 'audit-dom-results.json'), JSON.stringify(auditResults, null, 2));

  await browser.close();
  console.log('Visual audit capture complete! Artifacts saved to visual-audit/');
}

run().catch((err) => {
  console.error('Audit capture failed:', err);
  process.exit(1);
});
