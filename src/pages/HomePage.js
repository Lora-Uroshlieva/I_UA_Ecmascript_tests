"use strict";

let BasePage = require('./BasePage');

class HomePage extends BasePage{
    get username()      { return $('[name="login"]');}
    get password()      { return $('input[name="pass"]');}
    get form()          { return $('form[name="lform"] input[type="submit"]');}
    get flash()         { return $('#lform_errCtrl > div.content.clear');}
    get menuTitle()     { return $('div.section_nav span.sn_menu_title');}

    constructor() {
        super();
    }

    open() {
        super.open('');
    }

    submit() {
        this.form.submitForm();
    }
}

module.exports = HomePage;