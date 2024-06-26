import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {

    setCounter(counter+1);

  }
  
  const removeValue = () => {

    setCounter(counter-1);

  }

  const reset = () => {
    setCounter(0);
  }


  return (
    <>
     <h1>React Counter</h1>
     <h2>Count Value: {counter}</h2>
     <button onClick = {addValue}>
      Add Value
     </button> {" "}
     <button onClick = {removeValue}>
      Remove Value
     </button> {" "}
     <button onClick = {reset}>Reset</button>
     {/* <h2>: {counter}</h2> */}
    </>
  )
}

export default App
