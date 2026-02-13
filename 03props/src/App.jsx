import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-600 text-blue-300 p-3 rounded-xl mb-2'>Tailwind CSS</h1>
      <Card username='rishab' btnText='click'/>
      <Card username='jain'/>
    </>
  )
}

export default App
