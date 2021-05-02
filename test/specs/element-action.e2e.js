const homePage = require('../../pages/home.po')

describe('Element Action Tests', function () {

    it.only('Is Page Footer Displayed', () => {
        browser.url('/')
        console.log(homePage.pageFooter.isDisplayed());
    })

})