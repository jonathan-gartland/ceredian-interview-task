import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class SupportPage extends Page {

    public get searchIcon() {
       return $('.searchicon');
    }

   public  get searchText() {
        return $('#SearchHere');
   }
   public get firstResult() {
        return $('#st-injected-content > div > div > div > a:nth-child(1)');
   }

    public open () {
        return super.open();
    }
}

export default new SupportPage();
