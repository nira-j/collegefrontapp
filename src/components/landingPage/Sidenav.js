import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SidenavButton from './usercomponent/SidenavButton';


export default function Sidenav(props) {

    const [activeItem, setActiveItem] = useState('Profile');
    

    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-className="bg-menu-theme">
                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Personal Details</span>
                </li>
                <ul className="menu-inner py-1 ps ps--active-y">
                    {
                        sessionStorage.getItem('role')=='USER' && (
                            <>
                            <SidenavButton value="Profile" actionpath="/user/landing" activeItem={activeItem} setActiveItem = {setActiveItem}/>
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
                            <SidenavButton value="Update mobile & email" actionpath="user/examform" activeItem={activeItem} setActiveItem={setActiveItem}/>
                            <SidenavButton value="Change Password" actionpath="user/examform" activeItem={activeItem} setActiveItem={setActiveItem}/>
                            </>
                        )
                    }

                    {
                        sessionStorage.getItem('role')=='ADMIN' && (
                            <>
                                <SidenavButton value="Dashboard" actionpath="/admin/landing" activeItem={activeItem} setActiveItem = {setActiveItem}/>
                                <SidenavButton value="Profile" actionpath="/admin/profile" activeItem={activeItem} setActiveItem = {setActiveItem}/>
                                <SidenavButton value="Update Profile" actionpath="/admin/profile/update" activeItem={activeItem} setActiveItem={setActiveItem} />
                            
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