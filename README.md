---
# WebDriverIO and JavaScript Automation Framework Setup Guide
---

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code
* Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken`
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Add new spec under `test` folder
* Name the file as <testname>.e2e.js (e.g. login.e2e.js)
* Create page object under pageobjects/ folder as <page-name>.page.js (e.g. login.page.js)

### How to Run Test
* Go to Project root directory and run command: `npm run wdio`
* If you want to run api tests then run command: `npm run wdio:api`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### How to view HTML report
* Go to Project root directory: `./allure-results/index.html`

### Sample Test Results
![WebDriverIO and JavaScript Test Report](./assets/Allure-Report.png?raw=true "WebDriverIO and JavaScript Test Report")

![WebDriverIO and JavaScript Test Report Expanded View](./assets/Allure-Report-Detailed-View.png?raw=true "WebDriverIO and JavaScript Test Report Expanded View")

### How to run Test on SauceLabs
* SauceLabs Quickstart `https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/`
    * Set Environment Variables:
        * Open Terminal
        * Run ```touch ~/.bash_profile; open ~/.bash_profile```
        * In TextEdit, add
        * `export SAUCE_USERNAME=“YOUR USERNAME”`
        * `export SAUCE_ACCESS_KEY="YOUR ACCESS KEY"`
        * Save the .bash_profile file and Quit (Command + Q) Text Edit.
        * In Terminal echo $SAUCE_USERNAME
        * In Terminal echo $SAUCE_ACCESS_KEY
* Configure ```https://docs.saucelabs.com/secure-connections/sauce-connect/setup-configuration/basic-setup/```
    * Open Terminal
    * Run ```cd sc-4.8.0-osx/bin```
    * Again run tests: ```./sc -u YourUsername -k YourAccessKey --region us-west --tunnel-name YourTunnelName```