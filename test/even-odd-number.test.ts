import { evenOrOdd } from "../src/even-odd-number";

describe('Test evenOrOdd function', () => {

    it('should return Even when evenOrOdd(2)', () => {
        expect(evenOrOdd(2)).toBe('Even')
    });

    it('should return Odd when evenOrOdd(0)', ()=> {
        expect(evenOrOdd(3)).toBe('Odd')
    })

    it('should return Even when evenOrOdd(-44)', () => {
        expect(evenOrOdd(-44)).toBe('Even')
    })

    it('should return Even when evenOrOdd(0)', ()=> {
        expect(evenOrOdd(0)).toBe('Even')
    })

})
