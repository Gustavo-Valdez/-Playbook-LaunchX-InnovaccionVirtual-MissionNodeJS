const User = require('./../../app/models/User')

describe("Test para User", () => {
    test("Requerimiento 1: Creación de User", () => {
        const user = new User(1, "gustavovaldez", "Gustavo", "Bio") 
        expect(user.id).toBe(1)
        expect(user.username).toBe("gustavovaldez")
    })

    test("Requerimiento 2: Fechas en atributos de User", () => {
        const user = new User(1, "gustavovaldez", "Gustavo", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })

    test("Requerimiento 3: Agregando getters", () => {
        const user = new User(1, "gustavovaldez", "Gustavo", "Bio")
        expect(user.getUsername).toBe("gustavovaldez")
    })

    test("Requerimiento 4: Agregando setters", () => {
        const user = new User(1, "gustavovaldez", "Gustavo", "Bio")
        user.setUsername = "gustavovaldez2"
        expect(user.username).toBe("gustavovaldez2")
    })
})