import react from 'react'

export default function Sidenav(props) {
    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-className="bg-menu-theme">

                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Personal Details</span>
                </li>

                <ul className="menu-inner py-1 ps ps--active-y">

                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Profile</div>
                        </a>
                    </li>


                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Apply For Examination</div>
                        </a>
                    </li>

                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">acedemics</span>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Admitcard</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Result</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Scrutiny</div>
                        </a>
                    </li>

                    <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>

                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics" data-toggle='modal' data-target='#mobileUpdatemodal'>Update mobile & email</div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Fee's Payment</div>
                        </a>
                    </li>


                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">News & Events</div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Feed Back</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics" onClick={()=>{props.setSidenavBtnState({updatePassword: true})}}>Change Password</div>
                        </a>
                    </li>

                    <div className="ps__rail-x" style={{ 'left': '0px', 'bottom': '0px' }}><div className="ps__thumb-x" tabindex="0" style={{ 'left': '0px', 'width': '0px' }}></div></div><div className="ps__rail-y" style={{ 'top': '0px', 'height': '168px', 'right': '4px' }}><div className="ps__thumb-y" tabindex="0" style={{ 'top': '0px', 'height': '27px' }}></div></div></ul>
            </aside>
        </>
    );
}