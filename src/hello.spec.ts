
import { Hello } from './hello';
import * as chai from 'chai';

const expect = chai.expect;

describe('Hello.speak()', () => {

    it('should say Hello World', () =>{
        var hello = new Hello();
        let message = hello.speak();
        expect(message).to.be.eql("Hello world!");
    });
});