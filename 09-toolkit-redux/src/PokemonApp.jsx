import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
    const { pokemons, isLoading, page } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch( getPokemons() );
    }, [])
    
    return (
        <>
            <h1>Pokemon App</h1>
            <hr />

            <ul>
                {
                    pokemons.map(pokemon => 
                        <li key={pokemon.url}>{ pokemon.name }</li>
                    )
                }
            </ul>

            <p>Pagina: { page }</p>

            <button
                disabled={isLoading}
                onClick={() => dispatch( getPokemons(page) )}
            >
                next
            </button>
        </>
    )
}
