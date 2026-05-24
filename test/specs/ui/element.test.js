//@ts-check
const { expect } = require('chai');
const homePage = require('../../pageobjects/home.page');

describe('Interacting with elements', function () {

    it('Get Heading from elements', async () => {
        await browser.url('/');
        const text = await homePage.pageHeader.getText();
        console.log('The heading is: ' + text);
        expect(text).to.equal('Welcome to the-internet');
    });

    it('Get Sub Heading text from elements', async () => {
        await browser.url('/');
        const text = await $('h2').getText();
        console.log('The Sub Heading h2 text is: ' + text);
        expect(await $('h2').isDisplayed()).to.equal(true);
    });

    it('Get Page Footer text from elements', async () => {
        await browser.url('/');
        const text = await $('#page-footer').getText();
        console.log('The Page Footer text is: ' + text);
        expect(await homePage.pageFooter.isDisplayed()).to.equal(true);
    });

    it('Get all the link on Home page', async () => {
        await browser.url('/');
        const links = await homePage.getLiText();
        expect(links.length).to.be.greaterThan(0);
    });

    it('Get specific link on Home page', async () => {
        await browser.url('/');
        const linkText = await homePage.getSpecificElementText(3);
        expect(linkText).to.be.a('string').and.not.empty;
    });
});
