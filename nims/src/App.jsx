import React from 'react'

import Homepage from './Pages/Homepage'
import { assets } from './assets/Assets'
import { Route, Routes } from 'react-router-dom'

import Universitiy from './Pages/Universitiy'
import Contact from './Pages/Contact'
import Terms from './Pages/Terms'
import Registration from './Pages/Registration'
import About from './Pages/About'
import College from './Pages/College'

export const backenUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Universities' element={<Universitiy/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/terms' element={<Terms/>} />
          <Route path='/colleges' element= {<College/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
    </>
  )
}

export default App