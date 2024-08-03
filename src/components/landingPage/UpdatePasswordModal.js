import { useState } from "react"

export default function UpdatePasswordModal(props) {
    const [password, setPassword]=useState('');
    const [cpassword, setCpassword]=useState('');

    function handlePasswordInput(e){
        setPassword(e.target.value);
    }
    function handlePasswordMatch(e){
        setCpassword(e.target.value);
        if(password!==cpassword){
            alert('Entered password not matched previous one');
        }
    }

    return (
        <>
            <div class="modal fade show" id="changePassword" tabindex="-1" aria-modal="true" role="dialog" style={{ 'display': 'block', 'padding-left': '0px' }}>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel1">Update Password</h5>
                            <button type="button" class="btn-close" onClick={()=>{
                                props.setSidenavBtnState({updatePassword: false})
                            }} aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row my-4">
                                <label htmlFor="password">Password</label>
                                <input type="text" placeholder='Enter new password' name="password" className='form-control' onChange={handlePasswordInput}/>
                            </div>
                            <div className="row my-4">
                                <label htmlFor="confirm password">Confirm Password</label>
                                <input type="text" placeholder='Retype password' name="cpassword" className='form-control' onBlur={handlePasswordMatch}/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick={() => {
                                props.setSidenavBtnState({updatePassword: false})
                            }}>Close</button>
                            <button type="button" class="btn btn-primary" onClick={()=>{props.handlePasswordUpdate(password)}}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}