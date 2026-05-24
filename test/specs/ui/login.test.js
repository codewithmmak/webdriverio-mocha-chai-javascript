const { expect } = require('chai');
const { credentials } = require('../../data/users');
const loginPage = require('../../pageobjects/login.page');
const secureAreaPage = require('../../pageobjects/secure-area.page');

describe('Login Tests', function () {

    it('should login with valid credentials', async () => {
        await browser.url('/login');
        await loginPage.username.click();
        await loginPage.username.clearValue();
        await loginPage.enterUsername(credentials.valid.username);
        expect(await loginPage.username.getValue()).to.equal(credentials.valid.username);

        await loginPage.password.click();
        await loginPage.password.clearValue();
        await loginPage.enterPassword(credentials.valid.password);
        expect(await loginPage.password.getValue()).to.equal(credentials.valid.password);

        await loginPage.clickLoginBtn();
        expect(await secureAreaPage.flashMessage.getText()).to.contain('You logged into a secure area!');
        expect(await secureAreaPage.h2Header.getText()).to.equal('Secure Area');
        expect(await secureAreaPage.h4Header.getText()).to.equal('Welcome to the Secure Area. When you are done click logout below.');
    });
});
