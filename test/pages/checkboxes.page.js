class CheckboxesPage {
    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) };

    selectedCheckbox(index) { return $(`//input[${index}]`) }

    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed();
        this.checkboxes(index).click();
    }

    isElementSelected(index) {
        this.selectedCheckbox(index).isSelected()
    }
}

module.exports = new CheckboxesPage();