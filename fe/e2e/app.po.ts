import { browser, by, element } from 'protractor';

export class Page {

  go(url: string) {
    return browser.get(url);
  }

  title() {
    return browser.getTitle();
  }

  getTextFrom(selector: string) {
    return element(by.css(selector)).getText();
  }

}
