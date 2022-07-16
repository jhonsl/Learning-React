import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  const incrementCounter = () => setCounter( (value) => value + 1 );
  // const incrementCounter = () => setCounter( counter + 1 );
  const decrementCounter = () => setCounter( (value) => value - 1 );
  // const decrementCounter = () => setCounter( counter - 1 );
  const resetCounter = () => setCounter( value );

  return (
    <>
      <h1>Counter App</h1>
      <h2 data-testid="title">El valor es: { counter }</h2>
      <button aria-label='btn-add' onClick={ incrementCounter }>
        +1
      </button>
      <button aria-label='btn-rest' onClick={ decrementCounter }>
        -1
      </button>
      <button aria-label='btn-reset' onClick={ resetCounter }>
        Reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}