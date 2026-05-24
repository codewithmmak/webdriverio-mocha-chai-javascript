//@ts-check
const { expect } = require('chai');
const homePage = require('../../pageobjects/home.page');

describe('Element State Tests', function () {

    it('Is Page Footer Displayed', async () => {
        await browser.url('/');
        expect(await homePage.pageFooter.isDisplayed()).to.equal(true);
    });

    it('Does the header exist?', async () => {
        await browser.url('/');
        expect(await homePage.pageHeader.isExisting()).to.equal(true);
    });

    it('Is footer in viewport?', async () => {
        await browser.url('/');
        expect(await homePage.pageFooter.isDisplayed()).to.equal(true);
    });

    it('Is Page Sub Header Enabled?', async () => {
        await browser.url('/');
        expect(await homePage.pageSubHeader.isDisplayed()).to.equal(true);
    });

    it('Click on Element', async () => {
        await browser.url('/');
        await homePage.clickOnLink();
        expect(await browser.getUrl()).to.equal(`${browser.options.baseUrl}/abtest`);
    });
});
