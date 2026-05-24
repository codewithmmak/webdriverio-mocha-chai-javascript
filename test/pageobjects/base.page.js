/**
 * Base page object containing shared methods inherited by all page objects.
 */
class Page {
    /**
     * Navigate to a sub-path relative to baseUrl.
     * @param {string} path - relative path (e.g. 'login')
     */
    open(path) {
        return browser.url(`/${path}`);
    }
}

module.exports = Page;
