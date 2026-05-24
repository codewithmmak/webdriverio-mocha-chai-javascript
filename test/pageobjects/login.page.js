
const Page = require('./base.page');

class LoginPage extends Page {
    get h2Header() { return $('div[class="example"] h2'); }
    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get btnSubmit() { return $('button[type="submit"]'); }

    async enterUsername(text) {
        await this.username.waitForDisplayed();
        await this.username.setValue(text);
    }

    async enterPassword(text) {
        await this.password.waitForDisplayed();
        await this.password.setValue(text);
    }

    async clickLoginBtn() {
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
