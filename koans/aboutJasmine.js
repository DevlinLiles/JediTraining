/**
 * Created by Eric Burcham on 5/31/2014.
 */

/*
 * Jasmine is a BDD framework for JavaScript.  It doesn't depend on lots of stuff.  It doesn't need a DOM, Jack.
 * It also has a pretty easy syntax.  Also, I kind of know it and I'm lazy, so you guys get to use Jasmine.
 *
 * You love it.
 */

describe('A suite', function () {
    it('contains specs with expectations', function () {
        // Expectations are built with the expect function.
        // 'it' takes a value, called 'actual'.
        // 'it' is chained with a Matcher function, which takes the expected value.
        expect(toDo).toBe(true);
    });
});


// 'describe' is a function.  It generally contains setup code for all the specs in the suite.
describe('A suite is a function', function () {
    var a;

    // 'it' is also a function.  It generally contains code needed for a set of expectations.
    it('and so is a spec', function () {
        // Make this test pass.
        a = true;

        expect(toDo).not.toBe(undefined);
        expect(toDo).toBe(true);
    });
});


// Each matcher implements a boolean comparison between the actual value and the expected value.
// They are responsible for reporting to Jasmine if the expectation is true or false.
// Jasmine will then pass or fail the spec.
describe('The "toBe" matcher compares with ===', function () {
    it('and has a positive case', function () {
        expect(toDo).toBe(true);
    });
    it('and can have a negative case', function () {
        expect(toDo).not.toBe(true);
    });
});


// Jasmine has a rich set of matchers included.
// Each is used here – all expectations and specs pass.
// There is also the ability to write custom matchers for when a project’s domain calls for specific assertions that
// are not included below.
describe("Included matchers:", function () {

    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;

        expect(toDo).toBe(b);
        expect(toDo).not.toBe(null);
    });

    describe("The 'toEqual' matcher", function () {

        it("works for simple literals and variables", function () {
            var a = 12;
            expect(toDo).toEqual(12);
        });

        it("should work for objects", function () {
            var foo = {
                a: 12,
                b: 34
            };
            var bar = {
                a: 12,
                b: 34
            };
            expect(toDo).toEqual(bar);
        });
    });

    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = "foo bar baz";

        expect(toDo).toMatch(/bar/);
        expect(toDo).toMatch("bar");
        expect(toDo).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };

        expect(toDo).toBeDefined();
        expect(toDo).not.toBeDefined();
    });

    it("The `toBeUndefined` matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };

        expect(toDo).not.toBeUndefined();
        expect(toDo).toBeUndefined();
    });

    it("The 'toBeNull' matcher compares against null", function () {
        var a = null;
        var foo = "foo";

        expect(toDo).toBeNull();
        expect(toDo).toBeNull();
        expect(toDo).not.toBeNull();
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", function () {
        var a, foo = "foo";

        expect(toDo).toBeTruthy();
        expect(toDo).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function () {
        var a, foo = "foo";

        expect(toDo).toBeFalsy();
        expect(toDo).not.toBeFalsy();
    });

    it("The 'toContain' matcher is for finding an item in an Array", function () {
        var a = ["foo", "bar", "baz"];

        expect(toDo).toContain("bar");
        expect(toDo).not.toContain("quux");
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926,
            e = 2.78;

        expect(toDo).toBeLessThan(pi);
        expect(toDo).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926,
            e = 2.78;

        expect(toDo).toBeGreaterThan(e);
        expect(toDo).not.toBeGreaterThan(pi);
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", function () {
        var pi = 3.1415926,
            e = 2.78;

        expect(toDo).not.toBeCloseTo(e, 2);
        expect(toDo).toBeCloseTo(e, 0);
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", function () {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function () {
            return a + 1;
        };

        expect(toDo).not.toThrow();
        expect(toDo).toThrow();
    });
});
