import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='head'>
    <div className='header'>
        <div className="header__nav">
            <Link to={"/"}> 
            <p> Home</p>
            </Link>
            <Link to={"/about"}>
            <p>About </p>
            </Link>
            <Link to={"/contact"}> <p> Contact</p></Link>
        </div>
       <Link to={"/"}>
       <h1>Landing</h1>
       </Link> 
        <button>Buy Now</button>
    </div>
    </header>
  )
}

export default Header