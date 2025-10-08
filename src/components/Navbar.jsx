import React from 'react';
import { Link } from "react-router-dom";
import heropic from '../assets/assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";






const Navbar = () => {


  

    return (

    
 <div>
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><Link to="/">Home</Link></li>
         <li><Link to="/apps">Apps</Link></li>
         <li><Link to="/Installation">Installation</Link></li>
        
        
      </ul>
    </div>
    <img className='w-[40px] h-[40px]' src={heropic} alt="" />
    <a className="btn btn-ghost text-xl">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><NavLink to="/" className={({isActive})=>
    isActive ? "text-purple-600":""
    }>Home</NavLink></li>
         <li><NavLink to="/apps" className={({isActive})=>
    isActive ? "text-purple-600":""
    }>Apps</NavLink></li>
         <li><NavLink to="/Installation" className={({isActive})=>
    isActive ? "text-purple-600":""
    }>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
   
    <a href="https://github.com/RatulFuad" className="btn btn-primary"> <FaGithub /> Contribute</a>
  </div>
</div>









 </div>

)}

export default Navbar;