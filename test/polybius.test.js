/* 
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false
*/
const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe ("polybius", ()=> {
    describe ("encoding", ()=> {
        it("should properly return coded message", ()=> {
            const actual = polybius("thinkful");
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
        it("should return encoded message and maintain spaces", ()=> {
            const actual = polybius("think ful");
            const expected = "4432423352 125413";
            expect(actual).to.equal(expected);
        });
        it("should return encoded message, ignoring capital letters", ()=> {
            const actual = polybius("Thinkful");
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
        it("should return an encoded message in pairs(i.e. message should be even)", ()=> {
            const actual = polybius("think");
            const expected = "4432423352";//10
            expect(actual).to.equal(expected);
        });
        it("should return '42' for any encoded message in place of 'j' and 'i' ", ()=> {
            const actual = polybius("iaj");
            const expected = "421142";
            expect(actual).to.equal(expected);
        });
    })
    describe ("decoding", ()=> {
        it ("should return false if string excluding spaces isn't even", ()=> {
            const actual = polybius("42114", false);
            const expected = false;
            expect(actual).to.equal(expected);
        });
        it ("should return decoded message while maintaining spaces", ()=> {
            const actual = polybius("3251131343 2543241341", false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });
        it ("should return both 'i/j' when decoding message containing '42", ()=> {
            const actual = polybius("4432423352125413", false);
            const expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        });
        it("should return properly decoded message", ()=> {
            const actual = polybius("3251131343 2345 33112351 4234 13544234", false);
            const expected = "hello my name (i/j)s lu(i/j)s" ;
            expect(actual).to.equal(expected);
        });
    });
    
});
