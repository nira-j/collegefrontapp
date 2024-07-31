import react from 'react'

export default function SignupPanel(props) {
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
                            <div className="row">
                                <div className="col mb-3">
                                    <label for="nameBasic" className="form-label">Name</label>
                                    <input type="text" id="nameBasic" className="form-control" placeholder="Enter Name" />
                                </div>
                            </div>
                            <div className="row g-2">
                                <div className="col mb-0">
                                    <label for="emailBasic" className="form-label">Email</label>
                                    <input type="text" id="emailBasic" className="form-control" placeholder="xxxx@xxx.xx"/>
                                </div>
                                <div className="col mb-0">
                                    <label for="dobBasic" className="form-label">DOB</label>
                                    <input type="text" id="dobBasic" className="form-control" placeholder="DD / MM / YY" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" onClick={props.closeSignupModal}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}