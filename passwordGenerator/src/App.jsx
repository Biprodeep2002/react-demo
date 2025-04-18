import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef=useRef(null)

  const passwordGenarator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!~#$%^&*_-/|+=@"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length +1);
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)},[password])


  useEffect(()=> {passwordGenarator()},[length,numberAllowed,charAllowed,passwordGenarator])


  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
    <h1 className="text-4xl text-center text-white ">Password Generator</h1>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-800 ">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
        <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-300'>copy</button>

      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={24} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
          <label >Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev);}} />
          <label >Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setCharAllowed((prev)=>!prev);}} />
          <label >Characters</label>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
