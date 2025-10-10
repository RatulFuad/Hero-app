import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
        
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;