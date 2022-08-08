import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('pruebas en el componente de HomePage', () => {
    const user = {
        id: 1,
        name: 'fernando'
    };

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        const pre = screen.getByLabelText('pre');
        expect(pre.innerHTML).toBe('null');
    });

    test('debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );
        const pre = screen.getByLabelText('pre');
        expect(pre.innerHTML).toBe(JSON.stringify(user, null, 2));
    });
});