import react, { useState, useEffect} from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';
import SidenavButton from './usercomponent/SidenavButton';
import UpdatePasswordModal from './usercomponent/UpdatePasswordModal';
import UpdateEmailMobileModal from './usercomponent/UpdateEmailMobileModal';
import axios from 'axios';

export default function Sidenav(props) {

    // const [userDetail, setUserDetail]=useState({});
    // setUserDetail(props.userDetails);
    const [sidenavBtnState, setSidenavBtnState] = useState({
        updatePassword: false,
        updateMobile: false,
    });


    const [activeItem, setActiveItem] = useState('Profile');
    const role = sessionStorage.getItem('role');

    useEffect(() => {
        
        if (role === 'ADMIN') {
            setActiveItem('Dashboard');
        }else if(role==='USER'){
            setActiveItem('Profile')
        }
    }, [role]);

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
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-className="bg-menu-theme">
                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Personal Details</span>
                </li>
                <ul className="menu-inner py-1 ps ps--active-y">

                {sidenavBtnState.updatePassword && <UpdatePasswordModal setSidenavBtnState={setSidenavBtnState} handlePasswordUpdate={handlePasswordUpdate} />}
                {sidenavBtnState.updateMobile && <UpdateEmailMobileModal setSidenavBtnState={setSidenavBtnState} handleMobileEmailUpdate={handleMobileEmailUpdate} />}
                    {
                        (role==='USER') && (
                            <>
                            <SidenavButton value="Profile" actionpath="/user/landing" activeItem={activeItem} setActiveItem = {setActiveItem} />
                            <SidenavButton value="Update Profile" actionpath="/user/profile/update" activeItem={activeItem} setActiveItem={setActiveItem} />
                            <SidenavButton value="Apply For Examination" actionpath="user/examform" activeItem={activeItem} setActiveItem={setActiveItem}/>
                            
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">acedemics</span>
                            </li>
                            <SidenavButton value="Admitcard" actionpath="/user/landing" activeItem={activeItem} setActiveItem = {setActiveItem}/>
                            <SidenavButton value="Result" actionpath="/user/profile/update" activeItem={activeItem} setActiveItem={setActiveItem} />
                            <SidenavButton value="Scrutiny" actionpath="user/examform" activeItem={activeItem} setActiveItem={setActiveItem}/>
                            <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>

                            <SidenavButton value="Fee's Payment" actionpath="/user/landing" activeItem={activeItem} setActiveItem = {setActiveItem}/>
                            <SidenavButton value="News & Events" actionpath="/user/profile/update" activeItem={activeItem} setActiveItem={setActiveItem} />
                            <SidenavButton value="Feed Back" actionpath="user/examform" activeItem={activeItem} setActiveItem={setActiveItem}/>
                            <SidenavButton value="Update mobile & email" actionpath="user/examform" activeItem={activeItem} setActiveItem={setActiveItem} setSidenavBtnState={setSidenavBtnState}/>
                            <SidenavButton value="Change Password" actionpath="user/examform" activeItem={activeItem} setActiveItem={setActiveItem} setSidenavBtnState={setSidenavBtnState}/>
                            </>
                        )
                    }

                    {
                        (role==='ADMIN') && (
                            <>
                                <SidenavButton value="Dashboard" actionpath="/admin/landing" activeItem={activeItem} setActiveItem = {setActiveItem}/>
                                <SidenavButton value="Profile" actionpath="/admin/profile" activeItem={activeItem} setActiveItem = {setActiveItem}/>
                                <SidenavButton value="Update Profile" actionpath="/admin/profile/update" activeItem={activeItem} setActiveItem={setActiveItem} />
                                <SidenavButton value=" Register New Student" actionpath="/admin/add/student" activeItem={activeItem} setActiveItem={setActiveItem} />
                                <SidenavButton value=" Register New Course" actionpath="/admin/add/course" activeItem={activeItem} setActiveItem={setActiveItem} />
                                <SidenavButton value=" Registered Students" actionpath="/admin/student/list" activeItem={activeItem} setActiveItem={setActiveItem} />
                                <SidenavButton value=" Registered Courses" actionpath="/admin/course/list" activeItem={activeItem} setActiveItem={setActiveItem} />
                            
                            </>
                        )
                    }


                    <div className="ps__rail-x" style={{'left': '0px', 'bottom': '-416px'}}>
                        <div className="ps__thumb-x" tabindex="0" style={{'left': '0px', 'width': '0px'}}></div></div>
                    <div className="ps__rail-y" style={{'top': '463px', 'height': '162px','right': '4px'}}><div className="ps__thumb-y" tabindex="0" style={{'top': '84px', 'height': '29px'}}></div></div>
                </ul>
            </aside>
        </>
    );
}