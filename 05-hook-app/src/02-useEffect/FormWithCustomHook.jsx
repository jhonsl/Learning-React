import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const { userName, password, email, onInputChange, onResetForm } = useForm({
        userName: '',
        email: '',
        password: ''
    });

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

            <input 
                type="password" 
                className='form-control mt-3'
                placeholder='password'
                name='password'
                value={ password }
                onChange={ onInputChange }
            />

            <button 
                className='btn btn-primary mt-2'
                onClick={onResetForm}
            >
                Reset
            </button>
        </>
    )
}
