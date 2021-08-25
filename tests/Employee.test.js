const Employee = require("../classes/employee")

describe("Employee", () => {

    it("Can it Instantiate Employee Instance", () => {

        const obj = new Employee()

        expect(typeof(obj)).toBe("object")

    })
    
    it("Can it set a name via constructor function", () => {
        const name = 'Justin'

        const obj = new Employee(name)

        expect(obj.name).toEqual(name)

    })

    it("Can it set an id via constructor function", () => {
        const name = 'Justin'
        const id = 1

        const obj = new Employee(name, id)

        expect(obj.id).toEqual(id)
    })

    it("Can set enail via constructor function", () => {
        const name = 'Justin'
        const id = 1
        const email = "j@gmail.com"

        const obj = new Employee(name, id, email)

        expect(obj.email).toEqual(email)
    })

    it("Can you get name via getName()", () => {
        const name = 'Justin'

        const obj = new Employee(name)

        expect(obj.getName()).toEqual(name)
    })

    it("Can you get an id via getId()", () => {
        const id = 2

        const obj = new Employee("justin", id)

        expect(obj.getId()).toEqual(id)
    })

    it("Can it get an email via getEmail()", () => {
        const email = "j@gmail.com"

        const obj = new Employee('justin', 1, email)

        expect(obj.getEmail()).toEqual(email)
    })

    it("getRole() should return 'Employee'", () => {
        const role = "Employee"

        const obj = new Employee('justin', 1, "j@gmail.com")

        expect(obj.getRole()).toEqual(role)
    })
})