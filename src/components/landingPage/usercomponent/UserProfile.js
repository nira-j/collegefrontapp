import {react,useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
// import axios from '../../api/CustomAxiosConfig';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';


export default function UserProfile() {

    const { userDetails, profilePath,setProfilePath, setSignaturePath}=useOutletContext();
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

    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
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
                            <div class="card-body">
                                <div class="d-flex align-items-start align-items-sm-center gap-4">
                                    <img src={profilePath} alt="user-avatar" class="d-block rounded" height="100" width="100" id="uploadedAvatar" />
                                    <div class="button-wrapper">
                                        <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                                            <span class="d-none d-sm-block">Upload new photo</span>
                                            <i class="bx bx-upload d-block d-sm-none"></i>
                                            <input type="file" id="upload" class="account-file-input" hidden accept="image/png, image/jpeg" name="profileimage" onChange={handleFileChange} />
                                        </label>
                                        <button type="button" class="btn btn-outline-secondary account-image-reset mb-4">
                                            <i class="bx bx-reset d-block d-sm-none"></i>
                                            <span class="d-none d-sm-block">Reset</span>
                                        </button>

                                        <p class="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="card-body">
                                <form id="formAccountSettings" method="POST" onsubmit="return false">
                                    <div className="row">
                                        <div className="mb-3 col-md-6">
                                            <label for="firstName" className="form-label">First Name</label>
                                            <input className="form-control" type="text" id="firstName" name="firstName" value={userDetails.firstname} readOnly />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label for="lastName" className="form-label">Last Name</label>
                                            <input className="form-control" type="text" name="lastName" id="lastName" value={userDetails.lastname} readOnly />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label for="email" className="form-label">E-mail</label>
                                            <input className="form-control" type="text" id="email" name="email" value={userDetails.emailid} placeholder="john.doe@example.com" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label for="organization" className="form-label">Dob</label>
                                            <input type="text" className="form-control" id="organization" name="organization" value={userDetails.dob} />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label" for="phoneNumber">Phone Number</label>
                                            <div className="input-group input-group-merge">
                                                <span className="input-group-text"> (+91)</span>
                                                <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" value={userDetails.mobileno} />
                                            </div>
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label for="address" className="form-label">Gender</label>
                                            <input type="text" className="form-control" id="address" value={userDetails.gender} />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label for="state" className="form-label">Course</label>
                                            <input className="form-control" type="text" value={userDetails.course} />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label for="zipCode" className="form-label">Zip Code</label>
                                            <input type="text" className="form-control" id="zipCode" name="zipCode" placeholder="231465" maxlength="6" />
                                        </div>


                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}