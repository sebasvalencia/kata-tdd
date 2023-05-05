import { longWordString } from "../src/long-word-string"

describe('Test lognWordString', ()=> {

    it('should return "Sebastian" when longWordString("Hello Sebastian") is call', ()=> {
        expect(longWordString("Hello Sebastian")).toBe("Sebastian")
    })

    it('should return "Hello" when longWordString("Hello Sebs") is call', () => {
        expect(longWordString("Hello Sebs")).toBe('Hello')
    })

    it('should return "" when longWordString("") is call', ()=> {
        expect(longWordString("")).toBe("")
    })

})




