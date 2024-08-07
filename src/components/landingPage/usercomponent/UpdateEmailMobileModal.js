
import { useState } from "react"

export default function UpdateEmailMobileModal(props) {

    const [mobEmail, setMobEmail] = useState({});

    function handleInput(e){
        const {name, value} = e.target;
        setMobEmail({...mobEmail,[name]: value})
    }

    return (
        <>
            <div class="modal fade show" id="changeMoblieno" tabindex="-1" aria-modal="true" role="dialog" style={{ 'display': 'block', 'padding-left': '0px' }}>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel1">Update Mobile no. and Email id</h5>
                            <button type="button" class="btn-close" onClick={() => {
                                props.setSidenavBtnState({ updateMobile: false })
                            }} aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row my-4">
                                <label htmlFor="password">EmailId</label>
                                <input type="text" placeholder='Enter new Emailid' name="emailid" className='form-control' onChange={handleInput} />
                            </div>
                            <div className="row my-4">
                                <label htmlFor="confirm password">Mobile no.</label>
                                <input type="text" placeholder='Mobile no.' name="mobileno" className='form-control' onChange={ handleInput} />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick={() => {
                                props.setSidenavBtnState({ updateMobile: false })
                            }}>Close</button>
                            <button type="button" class="btn btn-primary" onClick={()=>{props.handleMobileEmailUpdate(mobEmail)} }>Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}