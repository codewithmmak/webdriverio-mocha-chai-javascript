//@ts-check
const homePage = require('../pages/home.page')

describe('Interacting with elements', function () {

    it('Get Heading from elements', () => {
        browser.url('/')
        let text = homePage.pageHeader.getText
        console.log('The heading is: ' + text)
    })

    it('Get Sub Heading text from elements', () => {
        browser.url('/')
        let text = $("h2").getText()
        console.log('The Sub Heading h2 text is: ' + text)
    })

    it('Get Page Footer text from elements', () => {
        browser.url('/')
        let text = $("#page-footer").getText()
        console.log('The Page Footer text is: ' + text)
    })

    it('Get all the link on Home page', () => {
        browser.url('/')
        homePage.getLiText()
    })

    it('Get specific link on Home page', () => {
        browser.url('/')
        homePage.getSpecificElementText(3)
    })

})