import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  /*sets timeout for each test case*/
  timeout: 12000000,
  /*global time for each test cases*/
  globalTimeout: 12000000,
  /*number of retries if test case fails*/
  retries: 0,
  workers: 1,
  projects: [
    {
      name: 'NEXA',
      use: {
        /*Timeout for each navigation action in milliseconds. Defaults to 0 (no timeout).*/
        navigationTimeout: 10 * 10000,
        /*Default timeout for each Playwright action in milliseconds*/
        actionTimeout: 10 * 15000,
        /* Configure the browser to use.*/
        browserName: `chromium`,
        /*Chrome Browser Config*/
        channel: `chrome`,
        /*Browser Mode*/
        headless: false,
        launchOptions: {
          slowMo: 0,
        },
        ignoreHTTPSErrors: true,
        //Browser height and width
        //viewport: { width: 1920, height: 1080 },
        //Enable File Downloads in Chrome
        acceptDownloads: true,
        //Artifacts
        screenshot: `on`,
        video: `on`,
        trace: `on`,
      },
    }
  ],
  testMatch: [
   'tests/unit.test.ts',
   'tests/coreProject.test.ts',
   'tests/cloudlab.test.ts',
   'tests/libraryCurricullum.test.ts'
  ],
  /*Reporters*/

  // reporter: [[`list`], ['dot'], ['line'],
  // ['json', { outputFile: 'test-result.json' }],
  // ['html', {
  //   open: 'never'
  // }], [`experimental-allure-playwright`]],
  // globalTeardown: './helper/globalsetup.ts'
  // grep: [new RegExp('@smoke'), new RegExp('@slow'), new RegExp('@fast'), new RegExp('@reg'), new RegExp('@sanity')],
};

export default config;