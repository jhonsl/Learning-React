import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

const data = {
    name: 'jhon',
    correo: 'jhon@google.com',
    edad: 20
};

export const LoginPage = () => {
    const {user, handleSetUser} = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label='pre'>
                {JSON.stringify(user, null, 2)}
            </pre>

            <button 
                className='btn btn-primary'
                onClick={() => handleSetUser(data)}
            >
                Agregar usuario
            </button>
        </>
    )
}
