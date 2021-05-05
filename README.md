![WebdriverIO, Mocha, Chai and Javascript](./images/webdriverio-mocha-chai-javascript.PNG?raw=true "WebdriverIO, Mocha, Chai and Javascript")

# WebdriverIO Test Automation Examples
This is sample Test Automation framework designed using WebdriverIO, Mocha, Chai and Javascript. And in this framework we will see some basic working examples for learning.

## To Get Started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Scripts 
* Clone the repository into a folder
* Go to project root directory and install dependency: `npm install`
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

### How to Run Test
* Run Test: `npm test`
* This will run all the test found in path `./test/specs/**/*.js` which is specified in `wdio.conf.js` file

### How to Run Single Spec
* Run Test: `npm test -- --spec ./test/specs/element-action.test.js`

### How to Run Suite
* Run Test: `npm run test:suite`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### Console Test Results
![WebdriverIO, Mocha, Chai and Javascript Test Results](./images/console-test-results.PNG?raw=true "WebdriverIO, Mocha, Chai and Javascript Test Results")

## References
* https://github.com/serhatbolsu/webdriverio-mocha-uiautomation-boiler/blob/master/wdio.conf.js
* https://webdriver.io/docs/wdio-mochawesome-reporter/