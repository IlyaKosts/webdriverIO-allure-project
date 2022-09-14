const base = require("../pageobjects/base.page");
const main = require("../pageobjects/main.page");
const storage = require("../pageobjects/storage.page");
const assert = require('assert');
describe("Test suit for waitlist form.", () => {
    it("Accept coookies feature.", async () => {
        require('dotenv').config();
        console.log(process.env.TEST_ENV);
        await base.beforeEach("/");
        await main.acceptCookies();
    });
    it("TC#1: Waitlist form check (empty values).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.applyBtnClick();
        await expect(storage.lastNameResult).not.toBeDisplayed();
        await expect(storage.emailResult).not.toBeDisplayed();
        let resultFN = await storage.firstNameResult.getText();
        let resultDescription = await storage.description.getValue();
        assert(resultFN === 'This field is required.');
        assert(resultDescription === '');
    });
    it("TC#2: Waitlist form check (Filled fields, invalid email).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterFN();
        await storage.enterLN();
        await storage.enterInvEmail();
        await storage.enterDescription();
        await browser.pause(1000);
        await storage.applyBtnClick();
        let resultEmail = await storage.emailResult.getText();
        await expect(storage.lastNameResult).not.toBeDisplayed();
        await expect(storage.firstNameResult).not.toBeDisplayed();
        assert(resultEmail === 'example@yourdomain.com');
        await expect(storage.description).toHaveValueContaining('Not real description');
    });
    it("TC#3: Waitlist form check (Filled fields, decription empty).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterFN();
        await storage.enterLN();
        await storage.enterInvEmail()
        await storage.applyBtnClick();
        let resultEmail = await storage.emailResult.getText();
        await expect(storage.lastNameResult).not.toBeDisplayed();
        await expect(storage.firstNameResult).not.toBeDisplayed();
        assert(resultEmail === 'example@yourdomain.com');
        await expect(storage.description).toHaveValueContaining('');
    });
    it("TC#4: Waitlist form check (Only first name entered).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterFN();
        await storage.applyBtnClick();
        let resultLN = await storage.lastNameResult.getText();
        await expect(storage.firstNameResult).not.toBeDisplayed();
        await expect(storage.emailResult).not.toBeDisplayed();
        assert(resultLN === 'This field is required.');
        await expect(storage.description).toHaveValueContaining('');
    });
    it("TC#5: Waitlist form check (Only last name entered).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterLN();
        await storage.applyBtnClick();
        let resultFN = await storage.firstNameResult.getText();
        await expect(storage.lastNameResult).not.toBeDisplayed();
        await expect(storage.emailResult).not.toBeDisplayed();
        assert(resultFN === 'This field is required.');
        await expect(storage.description).toHaveValueContaining('');
    });
    it("TC#6: Waitlist form check (Only email (valid) entered).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterEmail();
        await storage.applyBtnClick();
        let resultFN = await storage.firstNameResult.getText();
        await expect(storage.lastNameResult).not.toBeDisplayed();
        await expect(storage.emailResult).not.toBeDisplayed();
        assert(resultFN === 'This field is required.');
        await expect(storage.description).toHaveValueContaining('');
    });
    it("TC#7: Waitlist form check (Only email (invalid) entered).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterInvEmail();
        await storage.applyBtnClick();
        let resultFN = await storage.firstNameResult.getText();
        await expect(storage.lastNameResult).not.toBeDisplayed();
        await expect(storage.emailResult).not.toBeDisplayed();
        assert(resultFN === 'This field is required.');
        await expect(storage.description).toHaveValueContaining('');
    });
    it("TC#8: Waitlist form check (Only description entered).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterDescription();
        await storage.applyBtnClick();
        let resultFN = await storage.firstNameResult.getText();
        await expect(storage.lastNameResult).not.toBeDisplayed();
        await expect(storage.emailResult).not.toBeDisplayed();
        assert(resultFN === 'This field is required.');
        await expect(storage.description).toHaveValueContaining('Not real description');
    });
    it("TC#9: Waitlist form check (Only first name empty).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterLN();
        await storage.enterEmail();
        await storage.enterDescription();
        await storage.applyBtnClick();
        let resultFN = await storage.firstNameResult.getText();
        await expect(storage.lastNameResult).not.toBeDisplayed();
        await expect(storage.emailResult).not.toBeDisplayed();
        assert(resultFN === 'This field is required.');
        await expect(storage.description).toHaveValueContaining('Not real description');
    });
    it("TC#10: Waitlist form check (Only last name empty).", async() => {
        await base.beforeEach("/products/storage");
        await storage.scrollToForm();
        await storage.enterFN();
        await storage.enterEmail();
        await storage.enterDescription();
        await storage.applyBtnClick();
        let resultLN = await storage.lastNameResult.getText();
        await expect(storage.firstNameResult).not.toBeDisplayed();
        await expect(storage.emailResult).not.toBeDisplayed();
        assert(resultLN === 'This field is required.');
        await expect(storage.description).toHaveValueContaining('Not real description');
    });
});