import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] =useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass] = useState("")
  
  const GeneratePassword = useCallback(()=>{
  
      let str = "ABCDEFGHKLMNOPQRSTUVWXYZabcdefghijklmnopqrustuwxyz"
      const number = "0123456789"
      const special_char = "!@#$%^&*()_+-={}[]|';:,.<>/?" 
      let generated_password = ""
      let char
      
      if(numberAllowed) str = str + number

      if(charAllowed)  str = str + special_char
      
      for(let i = 0; i < length; i++)
        {
            char = Math.floor(Math.random() * str.length)
            generated_password = generated_password + str.charAt(char) 
        }

        setPass(generated_password)
  },[length, numberAllowed, charAllowed,setPass])


  useEffect(()=>{                                     //to call the generatepassword function 
    GeneratePassword()
  },[length,numberAllowed,charAllowed])
  return (
    <>
      <div className ='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text"
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            />
            <button 
            className='outline-none bg-red-800 px-3 py-0.5 shrink-0 text-white'>
            Copy
            </button>
        </div>
         
        <div className='flex text-sm gap-x-2'> 
            <div className='flex items-center gap-x-1 text-white'>
              <input 
              type="range" 
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label className='text-white'>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                  type = "checkbox"
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  onChange={()=>{
                    setNumberAllowed((prev) => !prev)
                  }} 
              />
              <label htmlFor="numberInput" className='text-white'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                  type = "checkbox"
                  defaultChecked={charAllowed}
                  id='charInput'
                  onChange={()=>{
                    setCharAllowed((prev) => !prev)
                  }} 
              />
              <label htmlFor="charInput" className='text-white'>Special-Symbol</label>
            </div>
        </div> 
    </div>
    </>
  )
}

export default App
