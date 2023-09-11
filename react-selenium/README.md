# React + Selenium

## Steps to integrate Selenium with react app

1. Install the selenium webdriver and neccessary browser driver(s)
  - NPM
   ```
   npm install selenium-webdriver chromium
   ```
  - Yarn
  ```
  yarn add selenium-webdriver
  ```
2. Add a test runner to execute tests using selenium.
  ```
  yarn add -D mocha
  ```
3. Add a script to run mocha tests in the package.json
  ```
  "test": "mocha test"
  ```
4. Write tests (e.g app.spec.js) inside the test directory that can be found in project's root directory.
5. Run tests with command on the console `yarn test`
6. This will run the test in a browser that was configured in the test file.
   
