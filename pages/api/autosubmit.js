const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
chromium.setHeadlessMode = true;

// Optional: If you'd like to disable webgl, true is the default.
chromium.setGraphicsMode = false;

// Optional: Load any fonts you need. Open Sans is included by default in AWS Lambda instances
await chromium.font(
  "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
);
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { formUrl, emails } = req.body;

    if (!formUrl || !emails || !Array.isArray(emails)) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    try {
      // const browser = await puppeteer.launch({ 
      //   headless: true, 
      //   args: ['--no-sandbox', '--disable-setuid-sandbox'], 
      // });

      const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(
          "https://www.example.com/chromiumPack.tar"
        ),
        headless: chromium.headless,
      });

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
      return res.status(500).json({ message: error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
