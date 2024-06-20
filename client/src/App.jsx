import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Nav/>

<div className='container mt-0 mx-auto px-4 '>
   
    <Outlet/>
   </div>

    </div>
  
  )
}

export default App