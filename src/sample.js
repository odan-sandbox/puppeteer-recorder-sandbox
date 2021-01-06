/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-standalone-expect */
const {
  open,
  click,
  type,
  submit,
  expect,
  scrollToBottom,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("@puppeteer/recorder");
open("https://blog.odan.dev", {}, async (page) => {
  await click(
    'aria/link[name="Dependabot のオートマージのためにビジュアルレグレッションテストを導入した"]'
  );
  expect(page.url()).resolves.toBe(
    "https://blog.odan.dev/articles/2020/09/visual-regression-testing"
  );
  await scrollToBottom();
  await click('aria/link[name="odan blog"]');
  expect(page.url()).resolves.toBe("https://blog.odan.dev/");
  await click('aria/link[name="hardhat を試した"]');
  expect(page.url()).resolves.toBe(
    "https://blog.odan.dev/articles/2020/12/try-hardhat"
  );
});
