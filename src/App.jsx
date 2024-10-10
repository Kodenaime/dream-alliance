import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Visa from '../src/Pages/Visa'
import Info from '../src/Pages/Info'
import Blog from '../src/Pages/Blog'
import BlogForm from './Components/BlogForm'
import BlogManagement from './Components/BlogManagement'
import BlogDetails from './Components/BlogDetails'




const App = () => {
  return (
    
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}  />
            <Route path='/home' element={<Home />}  />
            <Route path='/visa' element={<Visa />}  />
            <Route path='/info' element={<Info />}  />
            <Route path='/blogs' element={<Blog />}  />
            <Route path='/creator' element={<BlogForm />}  />
            <Route path='/manager' element={<BlogManagement />}  />
            <Route path='/blog/:id' element={<BlogDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App