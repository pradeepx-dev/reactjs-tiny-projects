import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pag1 from './components/Pag1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pag1/>
      {/* <button className="bg-purple-500">Join Discord Server</button> */}
    </>
  )
}

export default App
