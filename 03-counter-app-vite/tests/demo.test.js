describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe fallar', () => {
        //1. Array
        const message1 = 'hola mundo';
    
        //2. Act
        const message2 = message1.trim();
    
        //3. Assert
        expect( message1 ).toBe( message2 );
    })
})
