const base = require("../pageobjects/base.page");
const main = require("../pageobjects/main.page");
const storage = require("../pageobjects/storage.page");
const assert = require('assert');
describe("Test suit for storage page.", () => {
    it("Accept coookies feature.", async () => {
        await base.beforeEach("/");
        await main.acceptCookies();
    });
    it("TC#1: Check text and image on storage paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.storageTopic.isDisplayed();
        await storage.storageText.isDisplayed();
       await storage.storageImg.isDisplayed();
    });
    it("TC#2: Check joint button on storage paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.storageJointBtnClick();
        await storage.form.isDisplayedInViewport();
    });
    it("TC#3: Check text and image on how telnyx storage works paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToHowworks();
        await storage.howworksTopic.isDisplayed();
        await storage.howworksText.isDisplayed();
        await storage.howworksImg.isDisplayed();
    });
    it("TC#4: Check joint button on how telnyx storage works paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToHowworks();
        await storage.how3worksJointBtnClick();
        await storage.form.isDisplayedInViewport();
    });
    it("TC#5: Check text and image on use case paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToUsecase();
        await storage.useCaseTopic.isDisplayed();
        await storage.useCaseTopic.isDisplayed();
    });
    it("TC#6: Check text and image on benefits paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToBenefits();
        await storage.benefitsText.isDisplayed();
        await storage.benefitsImg1.isDisplayed();
        await storage.benefitsImg2.isDisplayed();
        await storage.benefitsImg3.isDisplayed();
        await storage.benefitsImg4.isDisplayed();
    });
    it("TC#7: Check text and image on pricing paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.pricingText.isDisplayed();
        await storage.pricingTable.isDisplayed();
        await storage.pricingJointBtnClick();
        await storage.form.isDisplayedInViewport();
    });
    it("TC#8: Check text and image on dropdown elements in Frequently Asked Questions paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToDropElem();
        await storage.dropTopic.isDisplayed();
        await storage.drop1Btn.isDisplayed();
        await storage.drop2Btn.isDisplayed();
        await storage.drop3Btn.isDisplayed();
        await storage.drop4Btn.isDisplayed();
        await storage.drop5Btn.isDisplayed();
        await storage.drop6Btn.isDisplayed();
        await storage.drop7Btn.isDisplayed();
        await storage.drop8Btn.isDisplayed();
    });
    it("TC#9: Check elements on the bottom of the page.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToBottomElem();
        await storage.bottomTopics.isDisplayed();
        await storage.bottomElem.isDisplayed();
    });
    it("TC#10: Check the Telnyx logo on the bottom of the page.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToLogo();
        await storage.bottomLogo.isDisplayed();
    });
})