class SecureAreaPage {

    get flashMessage() { return $('#flash') }

    get h2Header() { return $('div[class="example"] h2') }

    get h4Header() { return $('h4[class="subheader"]') }

    get btnLogout() { return $('a[class="button secondary radius"]') }

}

module.exports = new SecureAreaPage();