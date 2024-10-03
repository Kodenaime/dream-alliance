import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Visa from '../src/Pages/Visa'
import Info from '../src/Pages/Info'
import Blog from '../src/Pages/Blog'




const App = () => {
  return (
    
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}  />
            <Route path='/home' element={<Home />}  />
            <Route path='/visa' element={<Visa />}  />
            <Route path='/info' element={<Info />}  />
            <Route path='/blog' element={<Blog />}  />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App