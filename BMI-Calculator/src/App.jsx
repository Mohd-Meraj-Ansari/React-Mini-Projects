import './App.css'
import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [message, setMessage] = useState('')
  const [bmi, setBmi] = useState(0)

  function calculate(e)
  {
    e.preventDefault()

    if(weight === 0 || height === 0)
    {
      alert("Please enter a valid weight or height ")
    }

    else
    {
      let bmi = (weight/(height * height))
      setBmi((bmi * 10000).toFixed(2))

      if(bmi <= 18.4)
      {
        setMessage('Underweight')
      }

      if(bmi >=18.5 && bmi <= 24.9)
        {
          setMessage('Normal')
        }
      if(bmi >= 25.0 && bmi <= 39.9)
        {
          setMessage('Overweight')
        }
      if(bmi >= 40.0)
        {
          setMessage('Obese')
        }     
    }
  }

  function reload()
  {
    window.location.reload()
  }
  
  return (
    <>
    <div className='app'>
      <div className='container'>
        <h3>BMI Calculator</h3>
        
          <form onSubmit={calculate}>
            <div>
              <label>Weigth</label>
              <input 
              type="text" 
              placeholder = 'value'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              />
              <span class="unit">in kgs</span>
            </div>

            <div>
              <label>Height</label>
              <input 
              type="text" 
              placeholder='value'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              />
              <span class="unit">in kgs</span>
            </div>

            <div>
              <button className='submit-btn' type="submit"> Submit </button>
              <button className='reload-btn' onClick={reload}>Reload</button>
            </div>

            <div>
              <h6>Your BMI is : {bmi}</h6>
              <p>{message}</p>
            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default App
