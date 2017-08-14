"use strict";

let BasePage = require('./BasePage');

class MailPage extends BasePage {
    get createLetter()      { return $('div.Left p.make_message a'); }
    get to()                { return $('#to'); }
    get subject()           { return $('[name="subject"]'); }
    get text()              { return $('#text') }
    get send()              { return $('[name="send"]'); }
    get messageAfterSend()  {return $('div.block_confirmation div[class="content clear"]')};

    constructor() {
        super();
    }

    open() {
        super.open('http://mbox2.i.ua');
    }
}

module.exports = MailPage;