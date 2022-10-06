
import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Add from './Add'
import List from './List'
import Login from './Login'
import Navbar from './Navbar'
import Update from './Update'
export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/addpage' element={<Add/>}/>
        <Route path='/edit/:_id' element={<Update/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}
