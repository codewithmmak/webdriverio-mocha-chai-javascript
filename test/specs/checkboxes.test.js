// @ts-check
const { expect } = require('chai');
const checkboxesPage = require('../pages/checkboxes.page');
const homePage = require('../pages/home.page');

describe('Checkbox Tests', function () {

    it('Checkbox 2 should be selected by default', () => {
        browser.url('/')
        homePage.clickLink('Checkboxes')
        expect(checkboxesPage.isElementSelected(2)).equal(true);
    })

    it.only('should click Checkbox 1', () => {
        browser.url('/')
        homePage.clickLink('Checkboxes')
        checkboxesPage.clickCheckbox(1)
        expect(checkboxesPage.checkboxes(1).isSelected()).equal(true)
    })
})