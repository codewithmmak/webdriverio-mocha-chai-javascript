class HomePage {
    get pageHeader() { return $('.heading'); }
    get pageSubHeader() { return $('h2'); }
    get h3Header() { return $('h3'); }
    get pageFooter() { return $('#page-footer'); }
    get parent() { return $('ul'); }
    get childElements() { return this.parent.$$('li'); }

    specificChildElements(index) { return this.parent.$(`li:nth-child(${index})`); }

    get firstLink() { return $('ul li:nth-child(1) a'); }

    link(index) { return $(`ul li:nth-child(${index}) a`); }

    linkName(name) { return $(`//a[normalize-space()='${name}']`); }

    async clickLink(name) {
        const link = await this.linkName(name);
        await link.waitForDisplayed();
        await link.click();
    }

    async getLiText() {
        const items = await this.childElements;
        const texts = [];

        for (const item of items) {
            const text = await item.getText();
            texts.push(text);
            console.log(text);
        }

        return texts;
    }

    async getSpecificElementText(index) {
        const element = await this.specificChildElements(index);
        await element.waitForDisplayed();
        return element.getText();
    }

    async clickOnLink() {
        const firstLink = await this.firstLink;

        if (await firstLink.isDisplayed()) {
            await firstLink.click();
        }

        await this.h3Header.waitForDisplayed();
    }
}

module.exports = new HomePage();
