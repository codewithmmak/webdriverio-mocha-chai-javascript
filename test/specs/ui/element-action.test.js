//@ts-check
const { expect } = require('chai');
const homePage = require('../../pageobjects/home.page');

describe('Element Action Tests', function () {

    it('should click an element', async () => {
        await browser.url('/');
        await homePage.clickOnLink();
        expect(await browser.getUrl()).to.equal(`${browser.options.baseUrl}/abtest`);
    });

    it('should get Text', async () => {
        await browser.url('/');
        expect(await homePage.getSpecificElementText(1)).to.equal('A/B Testing');
    });
});
