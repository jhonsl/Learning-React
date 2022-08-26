import counterReducer from "./slices/counter/counterSlice";
import pokemonReducer from "./slices/pokemon/pokemonSlice";

import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis/todosApi";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonReducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( todosApi.middleware )
})