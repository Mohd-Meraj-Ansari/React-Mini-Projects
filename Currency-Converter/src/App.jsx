import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setfromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [exchangerate, setExchangeRate] = useState({})
  const [convertedAmount, setConvertedAmount] = useState(null)


  useEffect(()=>{

    try
    {
      const URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      axios.get(URL)
      .then(response => {setExchangeRate(response.data.rates)})
    }
    catch (error)
    {
      console.log("Error in fetching data",error);
    }
  },[fromCurrency])

  useEffect(() => {
    
    const conversionRate = exchangerate[toCurrency]
   
    if(conversionRate)
      {
        const converted = amount * conversionRate;
        setConvertedAmount(converted.toFixed(2))
      }
  },[amount, fromCurrency, toCurrency, exchangerate])


  function handleChange(event)
  {
    const {name, value} = event.target;

    switch(name)
    {
      case 'amount':
        setAmount(value);
        break; 

      case 'fromCurrency':
        setfromCurrency(value);
        break;
        
      case 'toCurrency':
        setToCurrency(value);
        break;      
    }
  }

  return (
    <div className="card">
     <h1>Currency Converter</h1>

     <div className='container'>

        <div className='Box'>
          <label>Amount</label>
          <input type="number" name="amount" value={amount} onChange={handleChange} className='inputfield'/>
        </div>
       
        <div className='Box'>
          <label>From</label>
          <select name="fromCurrency" value={fromCurrency} onChange={handleChange} className='inputfield'>
          {
            Object.keys(exchangerate).map(currency => (
              <option key={currency} value={currency}>
                {currency}
                </option>
            ))
          }
          </select>
        </div>
         
        <div className='Box'>
          <label>To </label>
          <select name="toCurrency" value={toCurrency} onChange={handleChange} className='inputfield'>
          {
            Object.keys(exchangerate).map(currency => (
              <option key={currency} value={currency}>
                {currency}
                </option>
            ))
          }
          </select>
        </div>
      </div>
      
     <div className='output'>
      Converted Amount : {convertedAmount}
     </div>
  </div>
  )
}

export default App
