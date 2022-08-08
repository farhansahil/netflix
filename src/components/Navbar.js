import React from 'react'
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <>
         <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo " style={{marginLeft: "20px"}}>Netflix</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="science">Science Fiction</Link></li>
        <li><Link to="horror">Horror</Link></li>
        <li><Link to="romance">Romance</Link></li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default Navbar