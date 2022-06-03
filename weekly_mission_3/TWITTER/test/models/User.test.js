const User = require('./../../app/models/User')

describe("Test para User", () => {
    test("Creación de User", () => {
        const user = new User(1, "gustavovaldez", "Gustavo", "Bio", "dateCreated", "lastUpdate") 
        expect(user.id).toBe(1)
        expect(user.username).toBe("gustavovaldez")
    })
})