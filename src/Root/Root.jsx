import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import Footer from '../components/footer';

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