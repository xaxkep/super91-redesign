import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://www.fnp.com', { waitUntil: 'networkidle2' });

  // Scroll down progressively
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => window.scrollBy(0, 800));
    await new Promise((r) => setTimeout(r, 800));
  }

  const data = await page.evaluate(() => {
    const textNodes = Array.from(document.querySelectorAll('*')).filter((el) => {
      const text = el.innerText || '';
      return text.includes('₹') && text.length < 180 && el.children.length > 1;
    });

    return textNodes.slice(0, 6).map((el) => ({
      tagName: el.tagName,
      className: el.className,
      text: el.innerText.split('\n').map((s) => s.trim()).filter(Boolean),
    }));
  });

  console.log('Sample FNP Product Elements after scroll:', data.length);
  console.log(JSON.stringify(data.slice(0, 3), null, 2));
  await browser.close();
}

run().catch(console.error);
