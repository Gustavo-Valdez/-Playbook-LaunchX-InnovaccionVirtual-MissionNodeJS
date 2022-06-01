const Ajolonauta = require('./../app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creacion de objeto', () => {
        // Aqui tu puedes usar el código como lo deseas utilizar
        const woopa = new Ajolonauta("woopa")

        // Validar el resultado esperado 
        expect(woopa.name).toBe("woopa");
    });
})