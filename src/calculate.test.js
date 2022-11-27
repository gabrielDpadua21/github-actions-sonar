const sum = require('./calculete'); 

describe('test calculate', () => {
    test('should return sum of two numbers', () => {
        result = sum(10, 10);
        expect(result).toBe(20)
    })
})