import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='px-5'>
            <Header/>
            <Outlet/>
            
        </div>
    );
};

export default Main;