import React from 'react';
import heropic from '../assets/assets/logo.png'
import { FaGithub } from "react-icons/fa";
import google from '../assets/assets/playStore.png'
import appStore from '../assets/assets/appStore.png'
import bannerpic from '../assets/assets/hero.png'



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
        <li><a>Home</a></li>
        <li><a>Apps</a></li>
        
        <li><a>Installation</a></li>
      </ul>
    </div>
    <img className='w-[40px] h-[40px]' src={heropic} alt="" />
    <a className="btn btn-ghost text-xl">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Apps</a></li>
     
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   
    <a href="https://github.com/RatulFuad" className="btn btn-primary"> <FaGithub /> Contribute</a>
  </div>
</div>


<div>

    <h1 className='text-[72px] font-bold text-center'>We Build <br /><span className='text-[#632EE3]'>Productive </span>Apps
</h1>

<p className='text-center text-[#627382] font-semibold'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn our ideas into digital experiences that truly make an impact.</p>

{/* play store and app atore btn */}

<div className='flex justify-center items-center gap-3 mt-5'>
    <a href='https://play.google.com/store/games?hl=en' className='btn font-bold'> <img src={google} alt="" /> Google Play</a>
    <a href='https://www.apple.com/app-store/' className='btn font-bold'> <img src={appStore} alt="" /> App Store</a>
</div>

{/* banner pic */}

<div className='flex justify-center items-center mt-8'>
    <img  src={bannerpic} alt="" />
</div>

{/* trusrd by million */}

<div className='lg:w-full h-[410px] bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]'>
    <h1 className='text-center text-[75px] font-bold text-white '>Trusted by Millions, Built for You</h1>

   <div className='flex justify-center items-center gap-40 mt-14'>
     <div className='text-center text-white'>
        <p>Total Downloads</p>
        <h1 className='text-[60px] font-bold'> 29.6M</h1>
        <p>21% more than last month</p>
    </div>

    <div className='text-center text-white'>
        <p>Total Reviews</p>
        <h1  className='text-[60px] font-bold'>906K</h1>
        <p>46% more than last month</p>
    </div>

    <div className='text-center text-white'>
        <p>Active Apps</p>
        <h1  className='text-[60px] font-bold'>132+</h1>
        <p>31 more will Launch</p>
    </div>

   </div>


</div>
    
</div>


 </div>

)}

export default Navbar;