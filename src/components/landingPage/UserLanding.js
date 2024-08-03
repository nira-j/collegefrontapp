import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';
import Header from './Header';
import UpdatePasswordModal from './UpdatePasswordModal';
import UpdateEmailMobileModal from './UpdateEmailMobileModal';
import Content from './Content';
import Examform from './Examform'


const UserLanding = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    const [profilePath, setProfilePath] = useState(null);
    const [signaturePath, setSignaturePath] = useState(null);

    const [sidenavBtnState, setSidenavBtnState] = useState({
        updatePassword: false,
        updateMobile: false,
        examform: false
    });

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

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append(e.target.name, file);

        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data'
                }
            };
            const response = await axios.post(`http://localhost:9095/api/v1/upload/${e.target.name}`, formData, config);
            if (e.target.name === 'profileimage') {
                setProfilePath(URL.createObjectURL(file));
            } else if (e.target.name === 'signatureimage') {
                setSignaturePath(URL.createObjectURL(file));
            }
            alert(response.data);
        } catch (exc) {
            console.log(exc);
        }
    };
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

                        <Header profilePath={profilePath}/>

                        <div className="content-wrapper">
                            <Content handleFileChange={handleFileChange} profilePath={profilePath} userDetails={userDetails}/>
                            {sidenavBtnState.examform && <Examform/>}
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLanding;