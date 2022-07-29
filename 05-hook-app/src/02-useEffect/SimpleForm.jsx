import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'jhon',
        email: 'jhon@google.com'
    });

    const { userName, email } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
           [ name ]: value
        })
    };

    useEffect(() => {
        console.log("Inicio el componente");
    }, []);
    
    useEffect(() => {
        console.log('Cambio el formState');
    }, [formState]);

    return (
        <>
            <h1>Simple form</h1>
            <hr />

            <input 
                type="text" 
                className='form-control'
                placeholder='User name'
                name='userName'
                value={ userName }
                onChange={ onInputChange }
            />
            
            <input 
                type="email" 
                className='form-control mt-3'
                placeholder='jhon@google.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />

            { userName === 'jhon' && <Message /> }
        </>
    )
}
