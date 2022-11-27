const sum = require('./calculete'); 

describe('test calculate', () => {
    test('should return sum of two numbers', () => {
        expect(sum(10, 10)).toBe(20)
    })
})