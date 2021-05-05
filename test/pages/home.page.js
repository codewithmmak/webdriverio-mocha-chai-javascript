class HomePage {
    get pageHeader() { return $('.heading') };

    get pageSubHeader() { return $('h2') };

    get h3Header() { return $('h3') };

    get pageFooter() { return $('#page-footer') };

    get parent() { return $('ul') };
    get childElements() { return this.parent.$$('li') };

    specificChildElements(index) { return this.parent.$(`li:nth-child(${index})`) }; // Note that locator is in tilde

    get firstLink() { return $('ul li: nth-child(1) a') }

    link(index) { return $(`ul li: nth-child(${index}) a`) }

    linkName(name) { return $(`//a[normalize-space()='${name}']`) }

    /**
     * Clicks on the Link based on the index provided
     * @param {Number} index the index of the element
     */
    clickLink(name) {
        this.linkName(name).waitForDisplayed()
        this.linkName(name).click()
    }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText());
        })
    }

    getSpecificElementText(index) {
        this.specificChildElements(index).waitForDisplayed();
        return this.specificChildElements(index).getText();
    }

    clickOnLink() {
        // this.firstLink.click()
        if (this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        this.h3Header.waitForDisplayed();
    }
}

module.exports = new HomePage();