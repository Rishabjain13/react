import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
     <div className='w-full h-screen'
     style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-amber-50 px-2 py-2 rounded-2xl'>
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-2 rounded-full text-amber-50'
          style={{backgroundColor: 'red'}}
          >Red</button>

          <button 
          onClick={() => setColor("green")}
          className='outline-none px-4 py-2 rounded-full text-amber-50'
          style={{backgroundColor: 'green'}}
          >Green</button>

          <button 
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-2 rounded-full text-amber-50'
          style={{backgroundColor: 'blue'}}
          >Blue</button>

          <button 
          onClick={() => setColor("gray")}
          className='outline-none px-4 py-2 rounded-full text-amber-50'
          style={{backgroundColor: 'gray'}}
          >Gray</button>

          <button 
          onClick={() => setColor("black")}
          className='outline-none px-4 py-2 rounded-full text-amber-50'
          style={{backgroundColor: 'black'}}
          >Black</button>

          <button 
          onClick={() => setColor("lavender")}
          className='outline-none px-4 py-2 rounded-full text-amber-50'
          style={{backgroundColor: 'lavender'}}
          >Lavender</button>

          <button 
          onClick={() => setColor("pink")}
          className='outline-none px-4 py-2 rounded-full text-amber-50'
          style={{backgroundColor: 'pink'}}
          >Pink</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
