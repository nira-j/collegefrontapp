import react from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';
import Header from './Header';
import Content from './usercomponent/UserProfile';


const AdminLanding = () => {
    // const user=useState({});

    return(
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Sidenav />
                    <div className="layout-page">
                        <Header/>
                        <div className="content-wrapper">
                           <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLanding;