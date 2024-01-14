import React, { useState } from 'react';
import './Navbar.scss';
import { FaAlignJustify } from "react-icons/fa6";
import Sidebar from '../sidebar/Sidebar';

function Navbar() {
    const [toggle,settoggle]=useState(false);
    const items = ["Home", "About", "Sponsors","TeamGRNetwork", "Courses","Projects","Article","Assignments","Certificates","CEO Message","Executive&Leadership Team","Testimonials","Login","Contact"];

  return (
    <div className='navbar'>
    <div className='navbar-title'><img className='logo' src='./images/LOGO .png' alt='log' width='40px' height='40px'/><h1>GR NETWORK</h1></div>
    <div><ul className='list'>
       {items.map((item,index)=>{
        return(
        <li className='listitem' key={index}><a href='#'>{item}</a></li>)
       })}
        {/* <li className='listitem'><a href='#'>Home</a></li> */}
        {/* <li className='listitem'><a href='#'>About</a></li> */}
        {/* <li className='listitem'><a href='#'>Sponsors</a></li> */}
        {/* <li className='listitem'><a href='#'>Courses</a></li> */}
        {/* <li className='listitem'><a href='#'>Testimonials</a></li> */}
        {/* <li className='listitem'><a href='#'>Login</a></li> */}
        {/* <li className='listitem'><a href='#'>Contact</a></li> */}
    </ul>
    </div>
    <div><button onClick={()=>{settoggle(!toggle)}} className='toggle-button'><FaAlignJustify  className='toggle-button-icon'/></button></div>
    {
        toggle &&<Sidebar toggle={toggle} settoggle={settoggle}/>
    }
    </div>
  )
}

export default Navbar