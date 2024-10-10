import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Visa from '../src/Pages/Visa'
import Info from '../src/Pages/Info'
import Blog from '../src/Pages/Blog'
import BlogForm from './Components/BlogForm'
import BlogManagement from './Components/BlogManagement'




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
            <Route path='/create' element={<BlogForm />}  />
            <Route path='/manage' element={<BlogManagement />}  />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App