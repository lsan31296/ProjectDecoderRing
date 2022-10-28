// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe ("caesar", ()=> {
    describe ("error stops", ()=> {
        it ("returns false if the shift amount is zero", ()=> {
            const actual = caesar("thinkful, 0");
            const expected = false;
            expect(actual).to.equal(expected);
        });
        it ("returns false if shift is less than -25", ()=> {
            const actual = caesar("thinkful", -26);
            const expected = false;
            expect(actual).to.equal(expected);
        });
        it ("returns false if shift is more than 25", ()=> {
            const actual =  caesar("thinkful", 26);
            const expected = false;
            expect(actual).to.equal(expected);
        });
    });

    describe ("encoding", ()=> {
        it ("returns coded message by shifting letters", ()=> {
            const actual = caesar("thinkful", 3);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });
        it ("returns coded message with maintained spaces and other symbols", ()=> {
            const actual = caesar("think? !ful", 3);
            const expected = "wklqn? !ixo";
            expect(actual).to.equal(expected);
        });
        it ("returns coded message ignoring capital letters", ()=> {
            const actual = caesar("Thinkful", 3);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });
        it ("returns coded message that wraps around high end of alphabet", ()=> {
            const actual = caesar("Zorro", 5);
            const expected = "etwwt";
            expect(actual).to.equal(expected);
        });
        it ("returns coded message that wraps around low end of alphabet", ()=> {
            const actual = caesar("abc", -4);
            const expected = "wxy";
            expect(actual).to.equal(expected);
        });
    });
    describe ("decoding", ()=> {
        it ("returns decoded message by shifting letters in opposite direction", ()=> {
            const actual = caesar("wklqnixo", 3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        it ("returns a decoded message with maintained spaces and other symbols", ()=> {
            const actual = caesar("wklqnixo", 3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        it ("returns decoded message ignoring capital letters", ()=> {
            const actual = caesar("Wklqnixo", 3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        it ("returns decoded message that wraps around high end of alphabet", ()=> {
            const actual = caesar("Etwwt", 5, false);
            const expected = "zorro";
            expect(actual).to.equal(expected);
        });
        it ("returns decoded message that wraps around low end of alphabet", ()=> {
            const actual = caesar("WXY", -4, false);
            const expected = "abc";
            expect(actual).to.equal(expected);
        });
    });

});