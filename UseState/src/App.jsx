import { useState } from 'react'
import './App.css'



function App() {

  let [counter, setCounter] = useState(0)
  
  function IncreaseHandler() 
  { 
      setCounter(counter + 1)  
  }

  function IncreaseHandlerByFive()
  {
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
  }

  function DecreaseHandler()
  {
    setCounter(counter - 1)

  }

  function ResetHandler()
  {
    setCounter(0)
  }
  return (
    <>
          <h3>Counter : {counter}</h3>
        <button onClick={IncreaseHandler}>Increase Counter</button>      
        <button onClick={IncreaseHandlerByFive}>Increase Counter by 5 </button>      
        <button onClick={DecreaseHandler}>Decrease Counter</button>      
        <button onClick={ResetHandler}>Reset Counter</button>      
    </>
  )
}

export default App
