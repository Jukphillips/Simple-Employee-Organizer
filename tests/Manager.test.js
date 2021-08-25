const Manager = require('../classes/manager')

describe("Manager", () => {

    it("Can it set office number via constructor argument", () => {
        const number = 203

        const obj = new Manager("justin", 1, "j@gmail.com", number)

        expect(obj.officeNumber).toEqual(number)

    })

    it("getRole should return 'Manager'", () => {
        const role = "Manager"

        const obj = new Manager("justin", 1, "j@gmail.com", 203)

        expect(obj.getRole()).toEqual(role)

    })

    it("Can it get office number via getOfficeNumber()", () => {
        const number = 203

        const obj = new Manager("justin", 1, "j@gmail.com", number)

        expect(obj.getOfficeNumber()).toEqual(number)

    })

})




