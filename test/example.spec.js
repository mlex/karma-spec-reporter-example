var expect = chai.expect;

describe('array', function () {
    'use strict';

    describe('push', function () {

        it('should add an element', function () {
            var arr = [];
            arr.push("hallo")

            expect(arr.length).to.equal(1);
        });


        it('should remove an element', function () {
            var arr = ["hello", "world"];
            var elem = arr.pop();
            
            expect(elem).to.equal("world");
            expect(arr.length).to.equal(1);
        });

        it('should do magic (this test will fail)', function () {
            var arr = [];
            expect(arr).to.contain("magic");
        });

    });

});
