import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

const numeros = [2,4,6,8,10];

export const Padre = () => {
    const [valor, setValor] = useState(0);

    const increment = useCallback(
      (number) => {
        setValor((state) => state + number);
      },
      [],
    )

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( number => (
                    <Hijo 
                        key={ number }
                        numero={ number }
                        incrementar={ increment }
                    />
                ))
            }
        </div>
    )
}
