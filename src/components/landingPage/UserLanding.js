import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';
import Header from './Header';
import UpdatePasswordModal from './usercomponent/UpdatePasswordModal';
import UpdateEmailMobileModal from './usercomponent/UpdateEmailMobileModal';
import { Outlet } from "react-router-dom";

  
const UserLanding = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    const [profilePath, setProfilePath] = useState(null);
    const [signaturePath, setSignaturePath] = useState(null);

    const gconfig = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    };

    const fetchdata = async () => {
        try {
            const response = await axios.get('http://localhost:9095/api/v1/get/userdetails', gconfig);
            if (response.status === 200) {
                setUserDetails(response.data);
                setProfilePath(`/uploadedimg/${response.data.profileimage}`);
                setSignaturePath(`/uploadedimg/${response.data.profilesignature}`);

            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        
        if(localStorage.getItem('token')){
            fetchdata();
        }else{
            navigate('/')
        }
    }, []);
    
    const [sidenavBtnState, setSidenavBtnState] = useState({
        updatePassword: false,
        updateMobile: false,
        });

    const contextValue={
        userDetails,
        setUserDetails,
        profilePath,
        setProfilePath,
        signaturePath, 
        setSignaturePath

    }

 
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Sidenav userDetails={userDetails} />
                    <div className="layout-page">

                        {/* <Header profilePath={profilePath}/> */}
                        <Header/>

                        <div className="content-wrapper">
                            <Outlet context={contextValue}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLanding;