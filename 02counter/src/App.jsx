import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [cnt,setCnt]=useState(0)
  //let counter=0
  const addValue =() => {
    //console.log('clicked',cnt);
    //counter=counter+1
    cnt=cnt+1
    setCnt(cnt)
  }
  const removeValue=() => {
    //console.log('clicked',cnt);
    if(cnt>0){
      cnt=cnt-1;
    }
    
    setCnt(cnt)
  }
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>React</h1>
      <h2>Counter value : {cnt}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
