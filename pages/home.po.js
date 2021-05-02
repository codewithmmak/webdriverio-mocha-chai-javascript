// const { default: $ } = require("webdriverio/build/commands/browser/$");
// const { default: $$ } = require("webdriverio/build/commands/browser/$$");

class HomePage {
    get pageHeader() { return $('.heading') };

    get pageSubHeader() { return $('h2') };

    get pageFooter() { return $('#page-footer') };

    get parent() { return $('ul') };
    get childElements() { return this.parent.$$('li') };

    specificChildElements(index) { return this.parent.$(`li:nth-child(${index})`) }; // Note that locator is in tilde

    get firstLink() { return $('ul li: nth-child(1) a') }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText());
        })
    }

    getSpecificElementText(index) {
        console.log(this.specificChildElements(index).getText());
    }

    clickOnLink() {

        this.firstLink.click()

        // if (this.firstLink.isDisplayed() === true) {
        //     this.firstLink.click()
        // }
        browser.pause(5000)
    }
}

module.exports = new HomePage();