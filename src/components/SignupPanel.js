import axios from '../api/CustomAxiosConfig';
import react, { useState } from 'react'

export default function SignupPanel(props) {

    const [formData, setFormData]=useState({'role':'USER_ROLE'});

    const handleInputChanges=(e)=>{
        const {name, value}=e.target;
        setFormData({...formData,[name]:value})
    }
    
    
    const submitForm = async (e) => {
        // e.preventDefault(); // Prevents the default form submission behavior
        const gconfig = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        try {
            const response = await axios.post('http://localhost:9095/api/v1/user/signup', formData, gconfig);
            if (response.status === 200) {
                alert('User signed up successfully!');
            }
        } catch (error) {
            console.error('There was an error signing up!', error);
            alert('There was an error signing up. Please try again.');
        }
    }
    
    return (
        <>
            <div className="modal fade show" id="signupModal" tabindex="-1" style={{'display': 'block', 'padding-left': '0px'}} aria-modal="true" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">Sign Up</h5>
                            <button type="button" className="btn-close" onClick={props.closeSignupModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-2">
                                <div className="col mb-3">
                                    <label for="nameBasic" className="form-label">Firstname</label>
                                    <input type="text" id="nameBasic" className="form-control" name="firstname" onChange={handleInputChanges} placeholder="Enter Firstname" />
                                </div>
                                <div className="col mb-0">
                                    <label for="nameBasic" className="form-label">Lastname</label>
                                    <input type="text" id="emailBasic" className="form-control" name="lastname" onChange={handleInputChanges} placeholder="Enter Lastname"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-0">
                                    <label for="nameBasic" className="form-label">Email id</label>
                                    <input type="email" id="emailBasic" className="form-control" name="emailid" onChange={handleInputChanges} placeholder=""/>
                                </div>
                                <div className="col mb-0">
                                    <label for="dobBasic" className="form-label">DOB</label>
                                    <input type="date" id="dobBasic" className="form-control" name="dob" onChange={handleInputChanges} placeholder="DD / MM / YY" />
                                </div>
                            </div>

                            <div className="row my-2">
                                <div className="col mb-0">
                                    <label for="emailBasic" className="form-label">Username</label>
                                    <input type="text" id="emailBasic" className="form-control" name="username" onChange={handleInputChanges} placeholder="username"/>
                                </div>
                                <div className="col mb-0">
                                    <label for="dobBasic" className="form-label">Password</label>
                                    <input type="password" id="dobBasic" className="form-control" name="password" onChange={handleInputChanges} placeholder="********" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" onClick={props.closeSignupModal}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={()=>{submitForm(); props.closeSignupModal();}}>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}