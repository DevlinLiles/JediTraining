describe('isNaN', function () {
    it('is a global method', function () {
        expect(toDo).toBe(typeof isNaN);
    });

    it('checks objects to see if they are numbers', function(){
        expect(toDo).toBe(isNaN(100));
        expect(toDo).toBe(isNaN(1.00e2));
        expect(toDo).toBe(isNaN(10.5));
        expect(toDo).toBe(isNaN('ABC'));
    });

    it('parses strings to see if they contain numbers', function(){
        expect(toDo).toBe(isNaN('100'));
        expect(toDo).toBe(isNaN('1.00e2'));
        expect(toDo).toBe(isNaN('10.50'));
    });

    it('does not parse functions express as a string', function(){
        expect(toDo).toBe(isNaN('100 + 100'));
    });

    it('considers boolean values to be numeric', function(){
        expect(toDo).toBe(isNaN(false));
        expect(toDo).toBe(isNaN(true));
    });
});
