// @ts-check
const { expect } = require('chai');
const checkboxesPage = require('../../pageobjects/checkboxes.page');
const homePage = require('../../pageobjects/home.page');

describe('Checkbox Tests', function () {

    it('Checkbox 2 should be selected by default', async () => {
        await browser.url('/');
        await homePage.clickLink('Checkboxes');
        expect(await checkboxesPage.isElementSelected(2)).to.equal(true);
    });

    it('should click Checkbox 1', async () => {
        await browser.url('/');
        await homePage.clickLink('Checkboxes');
        await checkboxesPage.clickCheckbox(1);
        expect(await checkboxesPage.isElementSelected(1)).to.equal(true);
    });

    it('should uncheck checkbox 1', async () => {
        await browser.url('/');
        await homePage.clickLink('Checkboxes');

        if (!(await checkboxesPage.isElementSelected(1))) {
            await checkboxesPage.clickCheckbox(1);
        }

        await checkboxesPage.clickCheckbox(1);
        expect(await checkboxesPage.isElementSelected(1)).to.equal(false);
    });
});
