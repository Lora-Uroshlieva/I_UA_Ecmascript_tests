"use strict";

let expext = require('chai').expect;

let User = require('./../../src/entities/User');
let PageManager = require('./../../src/pages/PageManager');

describe('check login process on main web-page', ()=>{
    let pages = new PageManager();
    let user = new User();

    afterEach(function () {
        browser.deleteCookie();
    });

    it('should reject access to mail with wrong password', ()=> {
        pages.homePage.open();
        pages.homePage.username.setValue(user.login);
        pages.homePage.password.setValue('11111');
        pages.homePage.submit();
        expext(pages.homePage.flash.getText()).to.contain('Неверный логин или пароль');
    });

    it('should enter into mail BasePage with correct login and password', ()=> {
        pages.homePage.open();
        pages.homePage.username.setValue(user.login);
        pages.homePage.password.setValue(user.password);
        pages.homePage.submit();
        expext(pages.homePage.menuTitle.getText()).to.contain('lora123456@i.ua');
    });

});
