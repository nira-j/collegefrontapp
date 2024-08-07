import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';
import Header from './Header';
import UpdatePasswordModal from './usercomponent/UpdatePasswordModal';
import UpdateEmailMobileModal from './usercomponent/UpdateEmailMobileModal';
import { Outlet } from "react-router-dom";

  
const UserLanding = () => {
    
    const [sidenavBtnState, setSidenavBtnState] = useState({
        updatePassword: false,
        updateMobile: false,
        });

    const handleMobileEmailUpdate = async (mobEmail) => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            };
           
            const data = new URLSearchParams();
            data.append('mobileno', mobEmail.mobileno);
            data.append('emailid', mobEmail.emailid);

            const response = await axios.post('http://localhost:9095/api/v1/update/mobilemail', data, config);
            if (response.status===200) {
                alert("Mobile and email updated successfully");
                setSidenavBtnState({...sidenavBtnState, ['updateMobile']: false});
               
            }
        } catch (error) {
            alert("Something went wrong!");
            console.error(error);
        }
    };

    const handlePasswordUpdate = async (password) => {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        const data = new URLSearchParams();
        data.append('password', password);

        const response = axios.post("http://localhost:9095/api/v1/update/password", data, config)
        if (response.data) {
            alert(response.data);
        }
    }


    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Sidenav setSidenavBtnState={setSidenavBtnState} />
                    {sidenavBtnState.updatePassword && <UpdatePasswordModal setSidenavBtnState={setSidenavBtnState} handlePasswordUpdate={handlePasswordUpdate} />}
                    {sidenavBtnState.updateMobile && <UpdateEmailMobileModal setSidenavBtnState={setSidenavBtnState} handleMobileEmailUpdate={handleMobileEmailUpdate} />}
                    <div className="layout-page">

                        {/* <Header profilePath={profilePath}/> */}
                        <Header/>

                        <div className="content-wrapper">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLanding;