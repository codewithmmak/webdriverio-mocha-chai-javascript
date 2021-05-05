//@ts-check
const { expect } = require('chai');
const homePage = require('../pages/home.page');

describe('Element Action Tests', function () {

    it('should click an element', () => {
        browser.url('/')
        homePage.clickOnLink();
        expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/abtest');
    })

    it.only('should get Text', () => {
        browser.url('/')
        expect(homePage.getSpecificElementText(1)).equals('A/B Testing');
    })
})