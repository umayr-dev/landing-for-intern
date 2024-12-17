import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from "../assets/icons/linkedin.svg"
import twitter from "../assets/icons/twitter.svg"
import yt from "../assets/icons/yt.svg"
import instagram from "../assets/icons/instagram.svg"
function Footer() {
  return (
    <>
    <footer>
    <div className="container">
      <div className="footer">
        <div className="footer-top">
          <p>©2023 Yourcompany</p>
          <h1>Landing</h1>
          <button>Purchase now</button>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__nav">
          <Link to={"/"}> 
            <p> Home</p>
            </Link>
            <Link to={"/about"}>
            <p>About </p>
            </Link>
            <Link to={"/contact"}> <p> Contact</p></Link>
          </div>
            <div className="socials">
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
              <img src={yt} alt="" />
              <img src={instagram} alt="" />
            </div>
        </div>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer