"use strict";

class User{

    constructor(login='lora123456',
                password='lora123456lora123456') {
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