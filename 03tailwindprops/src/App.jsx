import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

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
      <h1 className='bg-green-400 text-black p-4 rounded-lg'>Tailwind test</h1>
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2016/11/19/16/36/mountain-climbing-1840220_960_720.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
   {/* <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col bg-black rounded-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div> */}
      <Card username="Biprodeep" job="Trainee"/>
      <Card/>
    </>
  )
}

export default App
