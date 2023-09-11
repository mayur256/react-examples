# React + Playwright

## Steps to add playwright into an existing react app
1. Install playwright
   ```
   yarn create playwright
   ```
2. This installs all the necessary things required to get started with playwright in React
3. Write your tests in a file inside the **tests** or **src** directory. All tests must be inside src directory.
4. To run tests in UI mode `Skip --ui if you want to run tests in headless browser environment`
   ```
   npx playwright test --ui
   ```
5. The above command will open a Playwright Test window that offers quite a number of functionality to run, debug and monitor tests.
6. You can get more details about playwright configuration here - https://playwright.dev/docs/intro
