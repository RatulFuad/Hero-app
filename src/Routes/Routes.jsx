import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Apps from '../Pages/Apps';
import Banner from '../components/Banner';
import Installation from '../Pages/Installation';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children: [

       { path: "/", 
        
        element: <Banner></Banner> },
      
        {
            path:"/apps",
            element: <Apps></Apps>
        },
        {
            path:"/Installation",
            element: <Installation></Installation>
        }
    ]
  }
]);
