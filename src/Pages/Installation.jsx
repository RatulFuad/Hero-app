import React, { useEffect, useState } from 'react';



const Installation = ()=>{
  const [installedApps, setInstalledApps]= useState([])

  
  useEffect(() =>{
    const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(storedApps)
  }, []);


  const handleRemove =(id) =>{
    const updatedApps = installedApps.filter(app=>app.id !==id)
    setInstalledApps(updatedApps)
    localStorage.setItem('installedApps',JSON.stringify(updatedApps))
    
  };
  

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Installed Apps</h2>
      <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>

      <div className="dropdown flex justify-end">
  <div tabIndex={0} role="button" className="btn m-1">sort by size</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>sort by size</a></li>
    <li><a>sort by Name</a></li>
  </ul>
</div>

      {installedApps.length === 0 ? (
        <p></p>
      ) : (
        <div className="mt-5 gap-6">
          {installedApps.map((app)=> (
            <div key={app.id} className="mt-5 flex border rounded-xl  p-4  ">
             <div>
                 <img
                src={app.image}
    className="w-16 h-16  rounded-lg mb-3"
                alt=""/>
             </div>
              <div className='lg:ml-10'>
                <h3 className="text-xl font-bold">{app.title}</h3>
              <p>Size: {app.size}</p>
        <p>Downloads: {app.downloads}</p>
              </div>

             <div className='lg:ml-350'>
    <button
                onClick={() => handleRemove(app.id)}
                className="btn btn-success mt-3 text-white font-semibold"
              >
                Uninstall
              </button>
             </div>
                          

            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
