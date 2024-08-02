import react, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';
import Header from './Header';
import UpdatePasswordModal from './UpdatePasswordModal';


const UserLanding = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    const [profilePath, setProfilePath] = useState(null);
    const [signaturePath, setSignaturePath] = useState(null);

    const[sidenavBtnState, setSidenavBtnState]=useState({
        updatePassword: false
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
        fetchdata();
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
            const response = await axios.post(`http://localhost:9099/api/v1/upload/${e.target.name}`, formData, config);
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
    const handleMobileEmailUpdate = async () => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            };

            const data = new URLSearchParams();
            data.append('mobileno', userDetails.mobileno);
            data.append('emailid', userDetails.emailid);

            const response = await axios.post('http://localhost:9095/api/v1/update/mobilemail', data, config);
            if (response.data) {
                alert("Mobile and email updated successfully");
            }
        } catch (error) {
            alert("Something went wrong!");
            console.error(error);
        }
    };

    const handlePasswordUpdate = async () => {

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        const data = new URLSearchParams();
        data.append('mobileno', userDetails.mobileno);
        data.append('emailid', userDetails.emailid);

        const response = axios.post("http://localhost:9095/api/v1/update/password")
    }


    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Sidenav setSidenavBtnState={setSidenavBtnState}/>
                    {/* {sidenavBtnState.updatePassword && <UpdatePasswordModal setSidenavBtnState={setSidenavBtnState}/>} */}
                    <UpdatePasswordModal/>
                    <div className="layout-page">

                        <Header/>

                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <h4 className="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account Settings /</span> Account</h4>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="nav nav-pills flex-column flex-md-row mb-3">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="javascript:void(0);"><i className="bx bx-user me-1"></i> Account</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages-account-settings-notifications.html"><i className="bx bx-bell me-1"></i> Notifications</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages-account-settings-connections.html"><i className="bx bx-link-alt me-1"></i> Connections</a>
                                            </li>
                                        </ul>
                                        <div className="card mb-4">
                                            <h5 className="card-header">Profile Details</h5>
                                            <div className="card-body">
                                                <div className="d-flex align-items-start align-items-sm-center gap-4">
                                                    <img src="../assets/img/avatars/1.png" alt="user-avatar" className="d-block rounded" height="100" width="100" id="uploadedAvatar" />
                                                    <div className="button-wrapper">
                                                        <label for="upload" className="btn btn-primary me-2 mb-4" tabindex="0">
                                                            <span className="d-none d-sm-block">Upload new photo</span>
                                                            <i className="bx bx-upload d-block d-sm-none"></i>
                                                            <input type="file" id="upload" className="account-file-input" hidden="" accept="image/png, image/jpeg" />
                                                        </label>
                                                        <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                                                            <i className="bx bx-reset d-block d-sm-none"></i>
                                                            <span className="d-none d-sm-block">Reset</span>
                                                        </button>

                                                        <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="card-body">
                                                <form id="formAccountSettings" method="POST" onsubmit="return false">
                                                    <div className="row">
                                                        <div className="mb-3 col-md-6">
                                                            <label for="firstName" className="form-label">First Name</label>
                                                            <input className="form-control" type="text" id="firstName" name="firstName" value="John" autofocus="" />
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="lastName" className="form-label">Last Name</label>
                                                            <input className="form-control" type="text" name="lastName" id="lastName" value="Doe" />
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="email" className="form-label">E-mail</label>
                                                            <input className="form-control" type="text" id="email" name="email" value="john.doe@example.com" placeholder="john.doe@example.com" />
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="organization" className="form-label">Organization</label>
                                                            <input type="text" className="form-control" id="organization" name="organization" value="ThemeSelection" />
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label className="form-label" for="phoneNumber">Phone Number</label>
                                                            <div className="input-group input-group-merge">
                                                                <span className="input-group-text">US (+1)</span>
                                                                <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" placeholder="202 555 0111" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="address" className="form-label">Address</label>
                                                            <input type="text" className="form-control" id="address" name="address" placeholder="Address" />
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="state" className="form-label">State</label>
                                                            <input className="form-control" type="text" id="state" name="state" placeholder="California" />
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="zipCode" className="form-label">Zip Code</label>
                                                            <input type="text" className="form-control" id="zipCode" name="zipCode" placeholder="231465" maxlength="6" />
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label className="form-label" for="country">Country</label>
                                                            <select id="country" className="select2 form-select">
                                                                <option value="">Select</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="Canada">Canada</option>
                                                                <option value="China">China</option>
                                                                <option value="France">France</option>
                                                                <option value="Germany">Germany</option>
                                                                <option value="India">India</option>
                                                                <option value="Indonesia">Indonesia</option>
                                                                <option value="Israel">Israel</option>
                                                                <option value="Italy">Italy</option>
                                                                <option value="Japan">Japan</option>
                                                                <option value="Korea">Korea, Republic of</option>
                                                                <option value="Mexico">Mexico</option>
                                                                <option value="Philippines">Philippines</option>
                                                                <option value="Russia">Russian Federation</option>
                                                                <option value="South Africa">South Africa</option>
                                                                <option value="Thailand">Thailand</option>
                                                                <option value="Turkey">Turkey</option>
                                                                <option value="Ukraine">Ukraine</option>
                                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                                <option value="United Kingdom">United Kingdom</option>
                                                                <option value="United States">United States</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="language" className="form-label">Language</label>
                                                            <select id="language" className="select2 form-select">
                                                                <option value="">Select Language</option>
                                                                <option value="en">English</option>
                                                                <option value="fr">French</option>
                                                                <option value="de">German</option>
                                                                <option value="pt">Portuguese</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="timeZones" className="form-label">Timezone</label>
                                                            <select id="timeZones" className="select2 form-select">
                                                                <option value="">Select Timezone</option>
                                                                <option value="-12">(GMT-12:00) International Date Line West</option>
                                                                <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
                                                                <option value="-10">(GMT-10:00) Hawaii</option>
                                                                <option value="-9">(GMT-09:00) Alaska</option>
                                                                <option value="-8">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                                                <option value="-8">(GMT-08:00) Tijuana, Baja California</option>
                                                                <option value="-7">(GMT-07:00) Arizona</option>
                                                                <option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                                                                <option value="-7">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                                                <option value="-6">(GMT-06:00) Central America</option>
                                                                <option value="-6">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                                                <option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                                                                <option value="-6">(GMT-06:00) Saskatchewan</option>
                                                                <option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                                                                <option value="-5">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                                                <option value="-5">(GMT-05:00) Indiana (East)</option>
                                                                <option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                                                                <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label for="currency" className="form-label">Currency</label>
                                                            <select id="currency" className="select2 form-select">
                                                                <option value="">Select Currency</option>
                                                                <option value="usd">USD</option>
                                                                <option value="euro">Euro</option>
                                                                <option value="pound">Pound</option>
                                                                <option value="bitcoin">Bitcoin</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <button type="submit" className="btn btn-primary me-2">Save changes</button>
                                                        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLanding;