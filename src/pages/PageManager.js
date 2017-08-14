"use strict";

let HomePage = require('./HomePage');
let MailPage = require('./MailPage');

class PageManager {
    constructor(){
        this.homePage = new HomePage();
        this.mailPage = new MailPage();
    }
}

module.exports = PageManager;