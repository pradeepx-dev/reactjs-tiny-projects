import React, { useState } from 'react'
import Textform from './components/Textform'
// import { Routes, Route } from "react-router-dom"

const App = () => {

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.color = 'white'
      document.body.style.backgroundColor = '#1b1b20eb'
    }
    else {
      setMode('dark')
      document.body.style.color = '#1b1b20eb'
      document.body.style.backgroundColor = 'white'
    }
  }
  const [mode, setMode] = useState('dark');

  return (
    <div>
      <Textform mode={mode} toggleMode={toggleMode}/>
      {/* <Routes>
        <Route path="/" element={<Textform mode={mode} toggleMode={toggleMode} />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
  )
}

export default App

