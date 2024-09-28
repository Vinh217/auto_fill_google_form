import puppeteer from 'puppeteer';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { formUrl, emails } = req.body;

    if (!formUrl || !emails || !Array.isArray(emails)) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      for (const email of emails) {
        await page.goto(formUrl);
        await page.type('input[type="email"]', email);
        await sleep(1000);
        await page.evaluate(() => {
          window.scrollTo(0, document.body.scrollHeight);
        });
        await sleep(1000);
        await page.click('div[aria-label="Submit"]');
        await sleep(5000);
      }

      await browser.close();
      return res.status(200).json({ message: 'Forms submitted successfully' });
    } catch (error) {
      console.error('Error submitting form:', error);
      return res.status(500).json({ message: 'Error submitting form' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
