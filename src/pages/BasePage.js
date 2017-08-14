"use strict";

class BasePage {
    constructor(){
        this.title = 'My_page';
    }

    open(path) {
        if (path.startsWith('http')) {
            browser.url(path);
        } else {
            browser.url('');
        }
    }
}

module.exports = BasePage;