import { average } from "../src/average-all-numbers-of-array";

describe('Test average function', () => {
    it('should return 2 when average([1,2,3])', () => {
        expect(average([1, 2, 3])).toBe(2)
    })

    it('should return -2 when average([-1,2,-3])', () => {
        expect(average([-1, 2, -3])).toBe(-1)
    })

    it('should return 0 when average([3,-3])', () => {
        expect(average([3, -3])).toBe(0)
    })

})