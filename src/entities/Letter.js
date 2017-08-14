"use strict";

class Letter {
    constructor(to='lora123456@i.ua',
                subject='My letter for testing',
                text="Test text for sending") {
        this._to = to;
        this._subject = subject;
        this._text = text;
    }

    get to() {
        return this._to;
    }

    get subject() {
        return this._subject;
    }

    get text() {
        return this._text;
    }

    set to(value) {
        this._to = value;
    }

    set subject(value) {
        this._subject = value;
    }

    set text(value) {
        this._text = value;
    }
}

module.exports = Letter;