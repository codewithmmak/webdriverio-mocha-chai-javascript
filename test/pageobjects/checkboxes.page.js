class CheckboxesPage {
    checkboxes(index) { return $(`#checkboxes input[type="checkbox"]:nth-of-type(${index})`); }

    selectedCheckbox(index) { return this.checkboxes(index); }

    async clickCheckbox(index) {
        const checkbox = await this.checkboxes(index);
        await checkbox.waitForDisplayed();
        await checkbox.click();
    }

    async isElementSelected(index) {
        const checkbox = await this.selectedCheckbox(index);
        return checkbox.isSelected();
    }
}

module.exports = new CheckboxesPage();
