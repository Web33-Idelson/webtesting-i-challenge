const enhancer = require('./enhancer.js');
// test away!

describe("enhancer", () => {
    describe("repair", () => {
        it("should set durability to 100", () => {
            expect(enhancer.repair({ name: "sword", durability: 77, enhancement: 0 })).toEqual({ name: "sword", durability: 100, enhancement: 0 })
            expect(enhancer.repair({ name: "shield", durability: 0, enhancement: 0 })).toEqual({ name: "shield", durability: 100, enhancement: 0 })
        })
    })
    
    describe("success", () => {
        it("should increase enhance by 1 and do nothing at enhancement 20", () => {
            expect(enhancer.success({ name:"sword", durability: 0, enhancement: 10 })).toEqual({ name:"sword", durability: 0, enhancement: 11 })
            expect(enhancer.success({ name:"shield", durability: 2, enhancement: 20 })).toEqual({ name:"shield", durability: 2, enhancement: 20 })
        })
    })
    
    describe("fail", () => {
        it("should decrease durability by 5 if enhancement < 15, decrease durability by 10 if enhancement > 15 and if enhancement > 16 decrease enhancement by 1", () => {
            expect(enhancer.fail({ name: "sword", durability: 100, enhancement: 0})).toEqual({ name: "sword", durability: 95, enhancement: 0})
            expect(enhancer.fail({ name:"shield", durability: 50, enhancement: 19 })).toEqual({ name:"shield", durability: 40, enhancement: 18 })
            expect(enhancer.fail({ name:"axe", durability: 5, enhancement: 17 })).toEqual({ name:"axe", durability: 0, enhancement: 16 })
        })
    })
})

