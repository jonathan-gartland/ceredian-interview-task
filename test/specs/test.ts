/**
 * test with page objects
 */
import SupportPage from '../pageobjects/support.page';
import { browser } from '@wdio/globals';

describe('search "Mobile"', () => {
    it('should enter Mobile into search', async () => {
        await SupportPage.open()
        await expect(SupportPage.searchIcon.isClickable()).toBeTruthy();
        await SupportPage.searchIcon.click();
        await SupportPage.searchText.setValue("Mobile");

        await expect(SupportPage.firstResult.isClickable()).toBeTruthy();
        await SupportPage.firstResult.click();
        await browser.pause(3000);
        const newurl = await browser.getUrl();
        await expect(newurl).toEqual('https://www.ceridian.com/products/dayforce/hr/mobile');
    })
})

