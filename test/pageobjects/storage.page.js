let FN;
let LN;
let EM;
let IEM;
let DSC;
if(process.env.TEST_ENV==="firstUser") {
    FN = "FakeFirstUserName";}
    else if(process.env.TEST_ENV==="secondUser"){
    FN = "FakeSecondUserName";
};
if(process.env.TEST_ENV==="firstUser") {
    LN = "FakeFirstUserLastName";
} else if(process.env.TEST_ENV==="secondUser"){
    LN = "FakeSecondUserLastName";
};
if(process.env.TEST_ENV==="firstUser") {
    EM= "fakeFirstUEmail@gmail.com";
} else if(process.env.TEST_ENV==="secondUser"){
    EM = "fakeSecondUEmail@gmail.com";
};
if(process.env.TEST_ENV==="firstUser") {
    IEM= "InvalidFakeFirstUEmail";
} else if(process.env.TEST_ENV==="secondUser"){
    IEM = "InvalidFakeSecondUEmail";
};
if(process.env.TEST_ENV==="firstUser") {
    DSC= "Not real description for the first user.";
} else if(process.env.TEST_ENV==="secondUser"){
    DSC = "Not real description for the second user.";
};
class StoragePage {
    get form (){return $('[id="form"][class="sc-93eced66-0 ARKBf"]')};
    get firstName (){return $('#FirstName')};
    get lastName (){return $('#LastName')};
    get email (){return $('#Email')};
    get description (){return $('#Form_Additional_Information__c')};
    get applyBtn(){return $('[type="submit"]')};
    get firstNameResult (){return $('#ValidMsgFirstName')};
    get lastNameResult (){return $('#ValidMsgLastName')};
    get emailResult (){return $('div[id="ValidMsgEmail"] > span')};
    get storageTopic (){return $('[class="sc-31a8cefb-6 eCGKsC"]')};
    get storageText (){return $('[class="sc-31a8cefb-7 kjmzsk"] span')};
    get storageImg (){return $('img[alt="Better cloud storage, for less."]')};
    get storageJointBtn (){return $('div[class="sc-31a8cefb-0 gFMACo"] [class="sc-31a8cefb-10 jnwLUb"] [class="sc-5d3a275a-0 eKznVb"] a')};
    get howworksImg (){return $('[src="//images.ctfassets.net/taysl255dolk/5WbJhi3JhNggjrt20ucshA/d05f4f3d8d0e421c62b9e76dc30f1c85/Map_StorageCloudProductSites.svg"]')};
    get howworksTopic (){return $('[class="Text-sc-5o8owa-0 sc-31400ea3-3 gkWopw edeEGK"]')};
    get howworksText (){return $('[class="Text-sc-5o8owa-0 sc-5c7b8005-3 ijJVSH qvGJF"] div p')};
    get how3worksJointBtn (){return $('[class="sc-93eced66-0 dEpoyd"] [class="sc-181bec92-1 bgmPIp"] a')};
    get useCaseTopic (){return $('[class="sc-93eced66-0 fMtsmY"] [class="sc-31400ea3-2 daakqh"] [class="Text-sc-5o8owa-0 sc-6609d230-0 kcmcRT eXqUIY"]')};
    get useCaseText (){return $('[class="sc-b7e30be4-2 chvOdz"]')};
    get benefitsText (){return $('[class="sc-7b4ce54b-9 jCPDCX"]')};
    get benefitsImg1 (){return $('[src="//images.ctfassets.net/taysl255dolk/16H2dMsouTqN4PvyunK45Q/9ddad63b4222a61d6fb9b22e658f0808/Teaser_PaymentTiers.svg"]')};
    get benefitsImg2 (){return $('[src="//images.ctfassets.net/taysl255dolk/TuGUsusfpffC1zKIxHkIn/46dbb35217db90d49d928ee61dacd9af/Teaser_FastStorage_2x.png"]')};
    get benefitsImg3 (){return $('[src="//images.ctfassets.net/taysl255dolk/4RZ1jBpvqr5iru32wLRfG9/b601c3569a7a4de97d07486181b056a1/DeveloperDocs_Hero_CloudStorage.svg"]')};
    get pricingTable (){return $('div[class="Text-sc-5o8owa-0 sc-31400ea3-4 ijJVSH blWpIH"] table')};
    get pricingText (){return $('[id="pricing"] div[class="Text-sc-5o8owa-0 sc-31400ea3-4 ijJVSH blWpIH"] span')};
    get pricingJointBtn (){return $('[class="sc-93eced66-0 hUCqQg"] a')};
    get dropTopic (){return $('[class="Text-sc-5o8owa-0 sc-fec4993d-2 gkWopw jCdDd"]')};
    get drop1Btn (){return $('button[data-faq-question="0"]')};
    get drop2Btn (){return $('button[data-faq-question="1"]')};
    get drop3Btn (){return $('button[data-faq-question="2"]')};
    get drop4Btn (){return $('button[data-faq-question="3"]')};
    get drop5Btn (){return $('button[data-faq-question="4"]')};
    get drop6Btn (){return $('button[data-faq-question="5"]')};
    get drop7Btn (){return $('button[data-faq-question="6"]')};
    get drop8Btn (){return $('button[data-faq-question="7"]')};
    get bottomTopics (){return $('div[class="sc-7b6c9f9b-2 jSHfbB"] p')};
    get bottomElem (){return $('div[class="sc-7b6c9f9b-2 jSHfbB"] li')};
    get bottomLogo (){return $('div[class="sc-7b6c9f9b-10 kxxJtg"]')};

    async scrollToForm () {
        await this.form.scrollIntoView();
    };
    async enterFN () {
        await this.firstName.setValue(FN);
    };
    async enterLN () {
        await this.lastName.setValue(LN);
    };
    async enterEmail () {
        await this.email.setValue(EM);
    };
    async enterInvEmail () {
        await this.email.setValue(IEM);
    };
    async enterDescription () {
        await this.description.setValue(DSC);
    };
    async applyBtnClick () {
        await this.applyBtn.click();
    };
    async storageJointBtnClick () {
        await this.storageJointBtn.click();
    };
    async scrollToHowworks () {
        await this.howworksText.scrollIntoView();
    };
    async how3worksJointBtnClick () {
        await this.how3worksJointBtn.click();
    };
    async scrollToUsecase () {
        await this.useCaseTopic.scrollIntoView();
    };
    async scrollToBenefits () {
        await this.benefitsText.scrollIntoView();
    };
    async scrollToPricing () {
        await this.pricingJointBtn.scrollIntoView();
    };
    async pricingJointBtnClick () {
        await this.pricingJointBtn.click();
    };
    async scrollToDropElem () {
        await this.drop8Btn.scrollIntoView();
    };
    async scrollToBottomElem () {
        await this.bottomTopics.scrollIntoView();
    };
    async scrollToLogo () {
        await this.bottomLogo.scrollIntoView();
    };
}
module.exports = new StoragePage();