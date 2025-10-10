import React, { useEffect, useState } from 'react';
import {   useParams } from 'react-router';
import download from '../assets/assets/icon-downloads.png'
import rating from '../assets/assets/icon-ratings.png'
import like from '../assets/assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AppDetails  = () => {
    
    const {id}= useParams();
    const [showApp, setShowApp] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);



const handleInstall= () =>{
  const previousInstalls =JSON.parse(localStorage.getItem('installedApps')) || []

 

  const updatedInstalls =[...previousInstalls, showApp]
  localStorage.setItem('installedApps', JSON.stringify(updatedInstalls));

  setIsInstalled(true);
  toast("App install successfully")
  
};



 useEffect(() =>{
  fetch("/trending2.json")
    .then((res) =>res.json())
    .then((data) =>{
      const detailsApp = data.find((item) => item.id === parseInt(id));
      setShowApp(detailsApp)

      const installedApps =JSON.parse(localStorage.getItem('installedApps')) || []
      const alreadyInstalled =installedApps.some((app) =>app.id === parseInt(id));
      setIsInstalled(alreadyInstalled)
    });
}, [id]);

     
   if (!showApp) return <span className="loading loading-spinner loading-xl">fuad</span>
;


   

    return (
        <div>
        


            <div className=" flex justify-center mt-8 bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={showApp.image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{showApp.title}</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>


      <div className='flex gap-15'>
        <div>
        <img src={download} alt="" />
        <p>Download</p>
        <p className='text-[30px] font-bold'>{showApp.downloads}</p>
      </div>

      <div>
        <img src={rating} alt="" />
        <p>Average Ratings</p>
        <p  className='text-[30px] font-bold'>{showApp.ratingAvg}</p>
      </div>

      <div>
        <img src={like} alt="" />
        <p>Total Reviews</p>
        <p  className='text-[30px] font-bold'>{showApp.reviews}</p>
      </div>
      </div>


      


      <button
  onClick={handleInstall}
  disabled={isInstalled}
  className={`btn mt-5 font-bold text-[18px] ${isInstalled ? ' bg-green-400' : 'btn-success text-white'}`}
>
  {isInstalled ? 'Installed' : `Install Now (${showApp.size})`}
</button>

<ToastContainer/>

         
    </div>
  </div>

</div>






<div className="mt-16 px-10">
  <h2 className="text-3xl font-bold mb-6">Ratings</h2>

  <div style={{ width: "100%",height: 300 }}>
    <ResponsiveContainer>
      <BarChart
        data={[...showApp.ratings].reverse()}  
        layout="vertical"
        margin={{ top: 20, right:30, left:50, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category"width={80} />
        <Tooltip />
        <Bar dataKey="count" fill="#FF9800" barSize={25} radius={[0, 10, 10,0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

<div className='ml-5 mt-5'>
  <h1 className='text-2xl'>Describtion</h1>
  {showApp.description}
</div>

        </div>
    );
};

export default AppDetails ;







