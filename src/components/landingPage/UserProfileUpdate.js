import react from 'react'

export default function UserProfileUpdate(){
    return(
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
                          <input type="text" className="form-control" id="basic-default-fullname" placeholder="John Doe"/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" for="basic-default-fullname">Last Name</label>
                          <input type="text" className="form-control" id="basic-default-fullname" placeholder="John Doe"/>
                        </div>
                        
                        <div className="mb-3">
                          <label className="form-label" for="basic-default-email">Email</label>
                          <div className="input-group input-group-merge">
                            <input type="email" id="basic-default-email" className="form-control" placeholder="johndoe@example.com" aria-label="john.doe" aria-describedby="basic-default-email2"/>
                            {/* <span className="input-group-text" id="basic-default-email2">@example.com</span> */}
                          </div>
                          <div className="form-text">You can use letters, numbers &amp; periods</div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" for="basic-default-phone">Mobile No</label>
                          <input type="text" id="basic-default-phone" className="form-control phone-mask" placeholder="658 799 8941"/>
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Update</button>
                      </form>
                    </div>
                  </div>
                </div>
        
        </>
    );
}