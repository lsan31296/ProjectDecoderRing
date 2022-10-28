// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");
/*
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
*/
describe ("substitution", ()=> {
    describe ("error handling", ()=> {
        it ("should return false if alphabet parameter isn't exactly 26 characters", ()=> {
            const actual = substitution("thinkful", "abcdefghijklmnopqrstuvwxy");
            const expected = false;
            expect(actual).to.equal(expected);
        });
        it ("should return false if all characters in alphabet parameter aren't unique", ()=> {
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcab");
            const expected = false;
            expect(actual).to.equal(expected);
        });
        it ("should return false if alphabet parameter isn't included", ()=> {
            const actual = substitution("thinkful");
            const expected = false;
            expect(actual).to.equal(expected);
        });
    });
    describe("encoding a message", ()=> {
        it ("should return decode message maintaining spaces", ()=> {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'elp xhm xf mbymwwmfj dne';
            expect(actual).to.equal(expected);
        });
        it ("should return decoded message ignoring capital letters", ()=> {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'elp xhm xf mbymwwmfj dne';
            expect(actual).to.equal(expected);
        });
        it ("should return decoded message by substiution with given alphabet", ()=> {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'jrufscpw';
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", ()=> {
        it ("should return message maintaining spaces", ()=> {
            const actual = substitution("y&ii$r& y&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message me";
            expect(actual).to.equal(expected);
        });
        it ("should return message ignoring capital letters", ()=> {
            const actual = substitution("Y&iI$r& y&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message me";
            expect(actual).to.equal(expected);
        });
        it ("should return message by substiution with given alphabet", ()=> {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = 'thinkful';
            expect(actual).to.equal(expected);
        });
    });
});
