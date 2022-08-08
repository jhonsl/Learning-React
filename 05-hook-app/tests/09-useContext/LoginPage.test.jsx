import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('pruebas en el LoginPage', () => {
    const data = {
        name: 'jhon',
        correo: 'jhon@google.com',
        edad: 20
    };

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const pre = screen.getByLabelText('pre');
        expect(pre.innerText).toBeUndefined();
    });
    
    test('debe de llamar el setUser cuando se hace click en el boton', () => { 
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, handleSetUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith(data);
     });
});