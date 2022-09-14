const base = require("../pageobjects/base.page");
const main = require("../pageobjects/main.page");
const storage = require("../pageobjects/storage.page");
describe("Test suit for storage page.", () => {
    it("Accept coookies feature.", async () => {
        await base.beforeEach("/");
        await main.acceptCookies();
    });
    it("TC#1: Check text and image on storage paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await expect(storage.storageTopic).toBeDisplayed();
        await expect(storage.storageText).toBeDisplayed();
        await expect(storage.storageImg).toBeDisplayed();
    });
    it("TC#2: Check joint button on storage paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.storageJointBtnClick();
        await expect(storage.form).toBeDisplayedInViewport();
    });
    it("TC#3: Check text and image on how telnyx storage works paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToHowworks();
        await expect(storage.howworksTopic).toBeDisplayed();
        await expect(storage.howworksText).toBeDisplayed();
        await expect(storage.howworksImg).toBeDisplayed();
    });
    it("TC#4: Check joint button on how telnyx storage works paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToHowworks();
        await storage.how3worksJointBtnClick();
        await expect(storage.form).toBeDisplayedInViewport();
    });
    it("TC#5: Check text and image on use case paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToUsecase();
        await expect(storage.useCaseTopic).toBeDisplayed();
        await expect(storage.useCaseTopic).toBeDisplayed();
    });
    it("TC#6: Check text and image on benefits paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToBenefits();
        await expect(storage.benefitsText).toBeDisplayed();
        await expect(storage.benefitsImg1).toBeDisplayed();
        await expect(storage.benefitsImg2).toBeDisplayed();
        await expect(storage.benefitsImg3).toBeDisplayed();
    });
    it("TC#7: Check text and image on pricing paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await expect(storage.pricingText).toBeDisplayed();
        await expect(storage.pricingTable).toBeDisplayed();
        await storage.pricingJointBtnClick();
        await expect(storage.form).toBeDisplayedInViewport();
    });
    it("TC#8: Check text and image on dropdown elements in Frequently Asked Questions paragraph.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToDropElem();
        await expect(storage.dropTopic).toBeDisplayed();
        await expect(storage.drop1Btn).toBeDisplayed();
        await expect(storage.drop2Btn).toBeDisplayed();
        await expect(storage.drop3Btn).toBeDisplayed();
        await expect(storage.drop4Btn).toBeDisplayed();
        await expect(storage.drop5Btn).toBeDisplayed();
        await expect(storage.drop6Btn).toBeDisplayed();
        await expect(storage.drop7Btn).toBeDisplayed();
        await expect(storage.drop8Btn).toBeDisplayed();
    });
    it("TC#9: Check elements on the bottom of the page.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToBottomElem();
        await expect(storage.bottomTopics).toBeDisplayed();
        await expect(storage.bottomElem).toBeDisplayed();
    });
    it("TC#10: Check the Telnyx logo on the bottom of the page.", async () => {
        await base.beforeEach("/products/storage");
        await storage.scrollToLogo();
        await expect(storage.bottomLogo).toBeDisplayed();
    });
})