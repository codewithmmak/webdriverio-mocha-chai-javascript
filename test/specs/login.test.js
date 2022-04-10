const { assert } = require("chai")
const loginPage = require("../pages/login.page")
const secureAreaPage = require("../pages/secure-area.page")

describe('Login Tests ', function () {

    it('should be login', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        loginPage.username.click()
        loginPage.username.clearValue()
        loginPage.enterUsername('tomsmith')
        assert.equal('tomsmith', loginPage.username.getValue())
        loginPage.password.click()
        loginPage.password.clearValue()
        loginPage.enterPassword('SuperSecretPassword!')
        assert.equal('SuperSecretPassword!', loginPage.password.getValue())
        loginPage.clickLoginBtn()
        browser.pause(1000)
        assert.equal('You logged into a secure area!\n×', secureAreaPage.flashMessage.getText())
        assert.equal('Secure Area', secureAreaPage.h2Header.getText())
        assert.equal('Welcome to the Secure Area. When you are done click logout below.', secureAreaPage.h4Header.getText())
    })
})