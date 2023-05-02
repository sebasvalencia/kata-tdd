import { lowestNumberOnArray } from "../src/lowest-number-on-array";

describe('Test lowestNumberOnArray function', () => {
    it('should return 1 when lowestNumberOnArray([1,2,3]) is call', () => {
        expect(lowestNumberOnArray([1, 2, 3])).toBe(1)
    })

    it('should return 0 when lowestNumberOnArray([1,2,0]) is call', ()=> {
        expect(lowestNumberOnArray([1,2,0])).toBe(0)
    })

    it('should return -1 when lowestNumberOnArray([-1,2,0]) is call', ()=> {
        expect(lowestNumberOnArray([-1,2,0])).toBe(-1)
    })

})