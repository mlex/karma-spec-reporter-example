var expect = chai.expect;

describe('Given an array', function () {
    'use strict';

    describe('the method push', function () {

        it('should add an element', function () {
            var arr = [];
            arr.push("hallo");
            expect(arr.length).to.equal(1);
            console.debug("TestLog-1-in-should-add-an-element");
            expect(arr).to.contain("hallo");
            console.log("TestLog-2-in-should-add-an-element");
        });


        it.skip('should remove an element (this test is skipped)', function () {
            var arr = ["hello", "world"];
            var elem = arr.pop();
            console.debug("TestLog-1-in-remove-element");
            expect(elem).to.equal("world");
            console.log("TestLog-2-in-remove-element");
            expect(arr.length).to.equal(1);
            console.debug("TestLog-3-in-remove-element");
        });

        it('should do magic (this test will fail)', function () {
            var arr = [];
            expect(arr).to.contain("magic");
        });

    });

});
