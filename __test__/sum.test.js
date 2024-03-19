const sum = require('../src/sum')

describe('testing sumas', () => {
test('1 + 2 is 3', () => {
    expect(sum(1,2)).toBe(3)
})

it('should return 3 whit 1 + 2', () => {
    expect(sum(1,2)).toBe(3)
})

})