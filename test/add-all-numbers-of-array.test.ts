import { addAllNumbers } from "../src/add-all-numbers-of-array";

describe('Test addAllNumbers function', () => {

    it('should return 6 when addAllNumbers([1,2,3]) is call', ()=> {
        expect(addAllNumbers([1,2,3])).toBe(6)
    })

    it('should return -10 when addAllNumbers([-1,-2,-3,-4]) is call', ()=> {
        expect(addAllNumbers([-1,-2,-3,-4])).toBe(-10)
    })

    it('should return 0 when addAllNumbers([0]) is call', ()=> {
        expect(addAllNumbers([0])).toBe(0)
    })

})


