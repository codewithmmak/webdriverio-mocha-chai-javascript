const homePage = require('../../pages/home.po')

describe('Element State Tests', function () {

    it('Is Page Footer Displayed', () => {
        browser.url('/')
        console.log(homePage.pageFooter.isDisplayed());
    })

    it('Does the header exist?', () => {
        browser.url('/')
        console.log(homePage.pageHeader.isExisting());
    })

    it('Is footer in viewport?', () => {
        browser.url('/')
        console.log(homePage.pageFooter.isDisplayedInViewport());
    })

    it('Is Page Sub Header Enabled?', () => {
        browser.url('/')
        console.log(homePage.pageSubHeader.isDisplayedInViewport());
    })

    it('Click on Element', () => {
        browser.url('/')
        homePage.clickOnLink()
    })

})