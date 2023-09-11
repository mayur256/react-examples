/**
 * Dependency Modules
 */
import { strict as assert } from "node:assert";
import { describe, it } from "mocha";
import { Builder, Browser } from "selenium-webdriver";

const appUrl = "http://127.0.0.1:5173/";

const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

// Test Suite
describe('Preliminary', async() => {
    it('App title is React Selenium', async () => {
        try {
            await driver.get(appUrl);
            const appTitle = await driver.getTitle();
            assert(appTitle.match("React Selenium") !== null);
        } finally {
            await driver.quit();
        }
    })
 });