import {react,useEffect,useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from '../../api/CustomAxiosConfig';

export default function UserProfileUpdate(props) {
  const {userDetails}=useOutletContext();
  const [userProfile,setUserProfile]=useState({
    username: sessionStorage.getItem('username')
  });

  useEffect(()=>{
    setUserProfile({
      username: sessionStorage.getItem('username'),
      firstname:userDetails.firstname,
      lastname:userDetails.lastname,
      mobileno:userDetails.mobileno,
      emailid:userDetails.emailid,
    });
  },[])


  const handleInput=(e)=>{
    const {name, value}=e.target;
    setUserProfile({...userProfile, [name]:value});
  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post('api/v1/update/userdetails',userProfile);
      if(res.data){
        alert("User Details updated successfully!!");
      }
    }catch(err){
      alert("something went wrong ")
    }

  }
  return (
    <>
      <div className="col-xl mx-4 my-3">
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">User Profile update</h5>
            <small className="text-muted float-end">Default label</small>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label" for="basic-default-fullname">First Name</label>
                <input type="text" className="form-control" name="firstname" id="basic-default-fullname" onChange={handleInput} value={userProfile.firstname}/>
              </div>
              <div className="mb-3">
                <label className="form-label" for="basic-default-fullname">Last Name</label>
                <input type="text" className="form-control" name="lastname" id="basic-default-fullname" onChange={handleInput} value={userProfile.lastname}/>
              </div>

              <div className="mb-3">
                <label className="form-label" for="basic-default-email">Email</label>
                <div className="input-group input-group-merge">
                  <input type="email" id="basic-default-email" className="form-control" name="emailid" aria-label="john.doe" aria-describedby="basic-default-email2" onChange={handleInput} value={userProfile.emailid} />
                  {/* <span className="input-group-text" id="basic-default-email2">@example.com</span> */}
                </div>
                <div className="form-text">You can use letters, numbers &amp; periods</div>
              </div>
              <div className="mb-3">
                <label className="form-label" for="basic-default-phone">Mobile No</label>
                <input type="text" id="basic-default-phone" className="form-control phone-mask" name="mobileno" onChange={handleInput} value={userProfile.mobileno}/>
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}