const Intern = require('../classes/intern')



describe("Intern", () => {

    it("Can it set school via constructor function", () => {
        const school = "Denver University"

        const obj = new Intern("Justin", 1,"j@gmail.com", school)

        expect(obj.school).toEqual(school)
    })

    it("getRole() should return 'Intern'", () => {
        const role = "Intern"

        const obj = new Intern("Justin")

        expect(obj.getRole()).toEqual(role)
    })

    it("Can it get school via getSchool()", () => {
        const school = "Denver University"

        const obj = new Intern("Justin", 1,"j@gmail.com", school)

        expect(obj.getSchool()).toEqual(school)

    })
})