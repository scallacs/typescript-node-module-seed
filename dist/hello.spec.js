"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
var chai = require("chai");
var expect = chai.expect;
describe('Hello.speak()', function () {
    it('should say Hello World', function () {
        var hello = new hello_1.Hello();
        expect(hello.speak()).to.equals("Hello World!");
    });
});
