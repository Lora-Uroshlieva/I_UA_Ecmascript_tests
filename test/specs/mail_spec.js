"use strict";

let expect = require('chai').expect;

let User = require('./../../src/entities/User');
let PageManager = require('./../../src/pages/PageManager');
let Letter = require('./../../src/entities/Letter');

describe('check creating and sending a new message', ()=> {
    let pages = new PageManager();
    let user = new User();
    let letter = new Letter();

    before(()=>{
        pages.homePage.open();
        pages.homePage.username.setValue(user.login);
        pages.homePage.password.setValue(user.password);
        pages.homePage.submit();
   });

    after(()=>{
        browser.deleteCookie();
    });

    it('Should send message when all parameters are given', ()=>{
        pages.mailPage.open();
        pages.mailPage.createLetter.click();
        pages.mailPage.to.setValue(letter.to);
        pages.mailPage.subject.setValue(letter.subject);
        pages.mailPage.text.setValue(letter.text);
        pages.mailPage.send.click();
        let message = pages.mailPage.messageAfterSend.getText();
        expect(message).to.contain('Письмо успешно отправлено адресатам');
    });
});