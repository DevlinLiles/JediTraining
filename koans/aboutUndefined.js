describe('When getting a defined property from an object', function() {
    var target = {
        TODO: 'not undefined at all!'
    };
    it('the value of the property will be not be undefined', function() {
        expect(toDo).toBeDefined();
    });
    it('the value of the property will be not be undefined (showing idiomatic comparison)', function() {
        expect(toDo).not.toBe('undefined');
    });
});

describe('When getting an undefined property from an object', function() {
    var target = {
    };
    it('the value of the property will be undefined', function() {
        expect(toDo).toBeUndefined();
    });
    it('the value of the property will be undefined (showing idiomatic comparison)', function() {
        expect(toDo).toBe('undefined');
    });
});

describe('When invoking a function that is declared to take an argument', function() {
    it('should have the argument be defined if it is invoked with a value', function() {
        function target(value) {
            expect(toDo).toBeDefined();
        };
        target('hello!');
    });
    it('should have the argument be undefined if it is invoked with no values', function() {
        function target(value) {
            expect(toDo).toBeUndefined();
        };
        target();
    });
});
