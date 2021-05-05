class LoginPage {
    get h2Header() { return $('div[class="example"] h2') }

    get username() { return $('#username') }

    get password() { return $('#password') }

    get btnLogin() { return $('i[class="fa fa-2x fa-sign-in"]') }

    /**
     * Enter the username into the field
     * @param {String } text username to be entered
     */
    enterUsername(text) {
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }

    /**
     * Enter the password into the field
     * @param {String } text password to be entered
     */
    enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

    /**
     * Click on Login button
     * 
     */
    clickLoginBtn() {
        this.btnLogin.waitForClickable()
        this.btnLogin.click()
    }
}

module.exports = new LoginPage();