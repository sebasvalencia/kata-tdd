import { reverseWord } from '../src/reverse-word'

describe('Test reverseWord function', () => {
    it('should return "ecaep" when reverseWord("peace") is call', () => {
        expect(reverseWord('peace')).toBe('ecaep')
    })

    it('should return "" when reverseWord("") is call', () => {
        expect(reverseWord('')).toBe('')
    })

    it('should return "reverseWord" when reverseWord("reverseWord") is call', () => {
        expect(reverseWord('reverseWord')).toBe('droWesrever')
    })
})
