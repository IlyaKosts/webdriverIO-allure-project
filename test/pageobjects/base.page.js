class BasePage {
    async beforeEach (string) {
        await browser.url(string);
    };
};
module.exports = new BasePage();