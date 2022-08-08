import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/Main.app";
import { MemoryRouter } from 'react-router-dom'

describe('pruebas en el componente MainApp', () => {
    test('debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        screen.debug()
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe de mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        screen.debug()
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('debe de mostrar el AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        screen.debug()
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
});