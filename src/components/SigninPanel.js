import react,{useState} from 'react'

export default function SigninPanel(props) {

    const user=useState({})


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
                                                <input type="text" name="username" className="form-control" id="basic-default-fullname" placeholder="John Doe" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" for="basic-default-company">Password</label>
                                                <input type="text" name="password" className="form-control" id="basic-default-company" placeholder="Password" />
                                            </div>
                                            <div className="mb-3">
                                                <a href="">forgot password</a>
                                            </div>

                                            <button type="submit" className="btn btn-primary">Signin</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" onClick={props.closeSigninModal}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}