import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const SEARCH_QUERIES = [
  'luxury-business-card-mockup',
  'mailer-box-packaging',
  'roll-up-banner-exhibition',
  'editorial-brochure-mockup',
  'luxury-gift-box',
  'leather-notebook-planner',
  'wedding-invitation-gold-foil',
  'indian-sweets-mithai-box',
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const results = {};

  for (const q of SEARCH_QUERIES) {
    try {
      console.log(`Searching Unsplash for "${q}"...`);
      await page.goto(`https://unsplash.com/s/photos/${q}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await new Promise(r => setTimeout(r, 2000));

      const photos = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('figure img'));
        return imgs.map(img => ({
          alt: img.getAttribute('alt'),
          src: img.getAttribute('src'),
        })).filter(x => x.src && x.src.includes('images.unsplash.com/photo-')).slice(0, 3);
      });

      results[q] = photos;
    } catch (e) {
      console.warn(`Query ${q} failed: ${e.message}`);
    }
  }

  await browser.close();
  console.log('Results:\n', JSON.stringify(results, null, 2));
}

run().catch(console.error);
