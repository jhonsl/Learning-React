import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setcoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = ({ x, y }) => setcoords({x, y});
        window.addEventListener( 'mousemove', onMouseMove )
    
        return () => {
            window.removeEventListener( 'mousemove', onMouseMove )
        }
    }, [])
    
    return (
        <>
            <h3>El usuario ya existe</h3>
            { JSON.stringify( coords ) }
        </>
    ) 
}
