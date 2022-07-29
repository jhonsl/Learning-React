import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ quote, author }) => {
    const pref = useRef()
    const [boxSize, setboxSize] = useState({ 
        width: 0,
        height: 0
     })

    useLayoutEffect(() => {
        const { height, width } = pref.current.getBoundingClientRect();
        setboxSize({ width, height });
    }, [quote])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                ref={pref}
                style={{ display: 'flex' }}
            >
                <p className="mb-1">{ quote }</p>
                <footer className="blockquote-footer mt-1">{ author }</footer>
            </blockquote>

            <code>{ JSON.stringify( boxSize ) }</code>
        </>
    ) 
}
