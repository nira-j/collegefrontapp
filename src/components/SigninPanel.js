import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import userService from '../services/userService';
import axios from 'axios';


export default function SigninPanel(props) {

    const [userDetails, setUserDetails]=useState({name:'', password:''})
    const navigate = useNavigate();

    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setUserDetails({...userDetails,[name]: value})
    }

    const handleSignin=(e)=>{
        
        e.preventDefault();
        axios.post('http://localhost:9095/auth/signin', {
            username: userDetails.username,
            password: userDetails.password
        }).then(function(response){
            if (response.status === 200){
                if(response.data.jwttoken){
                    localStorage.setItem('token', response.data.jwttoken);
                    if(response.data.username=='admin'){
                        navigate("/admin/landing")
                    }else if(response.data.username=='user'){
                        navigate("/user/landing")
                    }
                }
            }else{
                alert("bad credentials")
            }
        })
        
    }
    return (
        <>
        
            <div className="modal fade show" id="signinModal" style={{'display': 'block', 'padding-left': '0px'}} aria-modal="true" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" onClick={props.closeSigninModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="col-xl">
                                <div className="card mb-4">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">Sign in </h5>
                                        <small className="text-muted float-end">Signin to continue</small>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label" for="basic-default-fullname">Username</label>
                                                <input type="text" name="username" className="form-control" id="basic-default-fullname" onChange={handleInputChange} placeholder="John Doe" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" for="basic-default-company">Password</label>
                                                <input type="password" name="password" className="form-control" id="basic-default-company" onChange={handleInputChange} placeholder="Password" />
                                            </div>
                                            <div className="mb-3">
                                                <a href="">forgot password</a>
                                            </div>

                                            <button type="submit" className="btn btn-primary" onClick={handleSignin}>Signin</button>
                                            {/* <button type="button" className="btn btn-outline-secondary mx-3" onClick={props.closeSigninModal}>Close</button> */}
                                        </form>
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