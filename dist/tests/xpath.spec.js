"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("text input action", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://testautomationpractice.blogspot.com/");
    const textbox = page.locator("#name");
    yield (0, test_1.expect)(textbox).toBeVisible();
    yield textbox.fill("Playwright Test");
    const inputValue = yield textbox.inputValue();
    console.log("Compared successfully", inputValue);
    (0, test_1.expect)(inputValue).toBe("Playwright Test");
    //Radio button
    const radioButton = page.locator("#male");
    yield (0, test_1.expect)(radioButton).toBeVisible();
    yield radioButton.check();
    const isChecked = yield radioButton.isChecked();
    console.log("Radio button checked", isChecked);
    (0, test_1.expect)(isChecked).toBe(true);
    //Checkbox
    test_1.test.only("checkbox test", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    }));
}));
