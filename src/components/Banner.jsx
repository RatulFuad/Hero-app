import React from 'react';
import { useEffect, useState } from 'react';
import google from '../assets/assets/playStore.png'
import appStore from '../assets/assets/appStore.png'
import bannerpic from '../assets/assets/hero.png'
import download from '../assets/assets/icon-downloads.png'
import rating from '../assets/assets/icon-ratings.png'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    
    const [tApp, setTApp] = useState([])
    const navigation = useNavigate();


      useEffect(()=> {
        fetch("/trending.json")
        .then(res=> res.json())
        .then(data=> setTApp(data))

    }, []);
    return (
        <div>
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


{/* trending 8 apps */}

<div>
    <h1 className='text-[48px] font-bold text-center'>Trending Apps</h1>
    <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>

   <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5">
  {tApp.map((trending) => (
    <div
      key={trending.id}
      className="card bg-white shadow-lg rounded-xl "
    >
      <figure className="overflow-hidden">
        <img
          src={trending.image}
     alt={trending.title}
    className="w-full h-48 "
        />
      </figure>
      <div className="card-body p-4">
<h2 className=" text-lg font-semibold  mb-2">
              {trending.title}
        </h2>
        <p className=" text-sm mb-4">{trending.description}</p>
        <div className="flex justify-between items-center ">
          <span className="flex items-center gap-1">
 <img src={download} alt="" className="w-4 h-4" /> 9M
          </span>
                <span className="flex items-center gap-1">
    <img src={rating} alt="" className="w-4 h-4" /> 5
          </span>
        </div>
      </div>
    </div>
  ))}

 
</div>

 <div className='flex justify-center mt-5'>
    <button onClick={()=> navigation("/apps")} className='btn btn-primary'>Show all</button>
  </div>


</div>
    
</div>
        </div>
    );
};

export default Banner;