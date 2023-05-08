import { stringEndsWith } from '../src/string-end-with'
describe('Test stringEndsWith function', () => {

    it('should return true when stringEndsWith("abcde", "cde") is call', () => {
        expect(stringEndsWith("abcde", "cde")).toBeTruthy()
    })

    it('should return false when stringEndsWith("abcde", "abc") is call', () => {
        expect(stringEndsWith("abcde", "abc")).toBeFalsy()
    })



})



