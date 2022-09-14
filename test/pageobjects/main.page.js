class MainPage {
    get acceptBtn (){return $('[class="sc-5d3a275a-0 jdjrgE"] button')};
    async acceptCookies() {
        let btnPresence = await this.acceptBtn.isDisplayed();
        if(btnPresence === true) {
            await this.acceptBtn.click();
        } else {
            console.log("'Accept cookies' step is skiped.")
        }
    };
}
module.exports = new MainPage();