import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App'
// import { PokemonApp } from './PokemonApp'

import { Provider } from 'react-redux'
import { store } from './store/store'
import { TodoApp } from './TodoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
      {/* <PokemonApp/> */}
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
)
