import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice';

import './App.css'

function App() {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <button>
          count is { counter }
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <button onClick={() => dispatch(incrementBy(22))}>
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
