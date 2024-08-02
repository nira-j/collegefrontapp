

export default function UpdateEmailMobileModal(props) {
    return (
        <><div className='modal fade' id='mobileUpdatemodal' tabindex="-1" role="dialog" aria-labelledby="mobleupdatemodal" aria-hidden="true">
            <div className='modal-dialog' role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update Mobile no. and Email id</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div style={{ 'paddingLeft': '50px', 'paddingRight': '50px' }}>

                            <div className="row">
                                <label htmlFor="password">Enter New Mobile no.</label>
                                <input type="text" placeholder='Enter mobile no.' name="mobileno" value={userDetails.mobileno} onChange={(e) => setUserDetails({ ...userDetails, mobileno: e.target.value })} className='form-control' maxLength={10} />
                            </div>
                            <div className="row">
                                <label htmlFor="confirm password">Enter New Email id</label>
                                <input type="email" placeholder='Enter Email id' name="emailid" value={userDetails.emailid} onChange={(e) => setUserDetails({ ...userDetails, emailid: e.target.value })} className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={handleMobileEmailUpdate} data-dismiss="modal">Update</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}