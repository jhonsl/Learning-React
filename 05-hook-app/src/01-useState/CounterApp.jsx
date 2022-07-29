import { useState } from "react"

export const CounterApp = () => {

    const [{ counter1, ...rest }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    return (
        <>
            <h1>Counter1: { counter1 }</h1>
            <h1>Counter2: { rest.counter2 }</h1>
            <h1>Counter3: { rest.counter3 }</h1>

            <hr />

            <button 
                className="btn"
                onClick={() => setCounter({
                    ...rest,
                    counter1: counter1 + 1
                })}
            >
                +1
            </button>
        </>
    )
}
