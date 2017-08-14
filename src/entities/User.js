"use strict";

class User{

    constructor(login='lora1234567',
                password='lora1234567lora1234567') {
        this._login = login;
        this._password = password;
    }

    get login() {
        return this._login;
    }

    get password() {
        return this._password;
    }

    set login(value) {
        this._login = value;
    }

    set password(value) {
        this._password = value;
    }
}

module.exports = User;