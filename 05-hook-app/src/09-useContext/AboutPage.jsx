import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const AboutPage = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <h1>AboutPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </>
    )
}
