import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'

function NavBar() {
  return (
    <div>
        <nav >

            <ul className='navBar'>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        
        <Routes>
        <Route path="/home" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default NavBar