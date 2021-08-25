const Engineer = require('../classes/engineer')

describe("Engineer", () => {

    it("Can it set github account via constructor", () => {
        const github = "juk"

        const obj = new Engineer("justin", 1, "j@gmail.com", github)

        expect(obj.github).toEqual(github)
    })

    it("getRole() should return Engineer", () => {

        const role = "Engineer"

        const obj = new Engineer("justin", 1, "j@gmail.com", "juk")

        expect(obj.getRole()).toEqual(role)
    })

    it("Can get Github Username via getgithub()", () => {
         const github = "juk"

        const obj = new Engineer("justin", 1, "j@gmail.com", github)

        expect(obj.getGithub()).toEqual(github)
    })

    })
    
