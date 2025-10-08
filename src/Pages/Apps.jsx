import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import download from '../assets/assets/icon-downloads.png'
import rating from '../assets/assets/icon-ratings.png'

const Apps = () => {

    const [tApp2, setTApp2] = useState([])
    const navigation2 = useNavigate();



     useEffect(()=> {
            fetch("/trending2.json")
            .then(res=> res.json())
            .then(data=> setTApp2(data))
    
        }, []);


    return (
        <div>
            <h1 className='text-[#001931] text-[46px] font-bold text-center'>Our All Applications</h1>
            <p className='text-[#627382] text-[20px] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center'>
                <p>(16) Apps Found</p>
                <input className='border lg:w-[300px] lg:h-[30px] p-5' type="text" placeholder='Search Apps' />
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5">
              {tApp2.map((trending2) => (
                <div
                  key={trending2.id}
                  className="card bg-white shadow-lg rounded-xl "
                  onClick={()=> navigation2(`/app/${trending2.id}`)}
                >
                  <figure className="overflow-hidden">
                    <img
                      src={trending2.image}
                 alt={trending2.title}
                className="w-full h-48 "
                    />
                  </figure>
                  <div className="card-body p-4">
            <h2 className=" text-lg font-semibold  mb-2">
                          {trending2.title}
                    </h2>
                    <p className=" text-sm mb-4">{trending2.description}</p>
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
        </div>
    );
};

export default Apps;