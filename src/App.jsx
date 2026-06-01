import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App