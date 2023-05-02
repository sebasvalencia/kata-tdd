import { biggestNumber } from "../src/biggest-number-on-array";

describe('Test biggestNumber function', () => {

    it('should return 3 when biggestNumber([1, 2, 3]) is call', () => {
        expect(biggestNumber([1, 2, 3])).toBe(3)
    });

    it('should return 1 when biggestNuber([1, 0]) is call', () => {
        expect(biggestNumber([1, 0])).toBe(1)
    })

    it('should return 1 when biggestNumber([-1, 0]) is call', () => {
        expect(biggestNumber([-1, 0])).toBe(0)
    })

})