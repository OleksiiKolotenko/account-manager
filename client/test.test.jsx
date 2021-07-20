const puppeteer = require("puppeteer");

test("should", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto("https://tranquil-wave-73797.herokuapp.com/registration");
});
