
export default function UpdatePasswordModal(props) {
    return (
        <>
            <div className="modal fade" id="changePasswordModal" tabindex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div style={{ 'paddingLeft': '50px', 'paddingRight': '50px' }}>

                                <div className="row">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" placeholder='Enter new password' name="password" className='form-control' />
                                </div>
                                <div className="row">
                                    <label htmlFor="confirm password">Confirm Password</label>
                                    <input type="text" placeholder='Retype password' name="cpassword" className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick={()=>{
                                props.sidenavBtnState.updatePassword=false
                                alert(props.sidenavBtnState.updatePassword)
                                }}>Close</button>
                            {/* <button type="button" class="btn btn-primary" onClick={}>Update</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}