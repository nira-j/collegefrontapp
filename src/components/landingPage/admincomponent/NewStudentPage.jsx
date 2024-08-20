import react from 'react';

export default function NewStudentPage() {

    const handleInputChange=()=>{

    }

    const handleSubmit=()=>{

    }
    return (
        <>
            <div class="card my-3 mx-4">
                <div class="card-header d-flex align-items-center justify-content-between">
                    <h5 class="mb-0">Add New Student</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row mb-3">
                            <hr />
                            <div className="col-md-6">
                                <label class="col-sm-2 col-form-label" for="basic-default-name">First Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="firstname" id="basic-default-name" onChange={handleInputChange} placeholder="Enter First name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label class="col-sm-2 col-form-label" for="basic-default-name">Last Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="lastname" id="basic-default-name" onChange={handleInputChange} placeholder="Enter First name" />
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div className="col-md-6">
                                <label class="col-sm-2 col-form-label" for="basic-default-company">Stream</label>
                                <div class="col-sm-10">
                                    <select class="form-select" id="inputGroupSelect01" name="medium" onChange={handleInputChange}>
                                        <option selected value="Science">Science</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Arts">Arts</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label class="col-sm-2 col-form-label" for="basic-default-company">College</label>
                                <div class="col-sm-10">
                                    <select class="form-select" id="inputGroupSelect01" name="centre" onChange={handleInputChange}>
                                        <option selected>XYZ College, place</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div className="col-md-6">
                                <label class="col-sm-2 col-form-label" for="basic-default-name">Subject</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="subject" id="basic-default-name" onChange={handleInputChange} placeholder="Enter Subject" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label class="col-sm-2 col-form-label" for="basic-default-company">Student Type</label>
                                <div class="col-sm-10">
                                    <select class="form-select" id="inputGroupSelect01" name="student_type" onChange={handleInputChange}>
                                        <option selected value="REGULAR">REGULAR</option>
                                        <option value="ATKT">ATKT</option>
                                        <option value="EX-REGULAR">EX-REGULAR</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div className="col-md-6">
                                <label class="col-sm-2 col-form-label" for="basic-default-company">Details</label>
                                <div class="col-sm-10">
                                    <textarea style={{ width: '600px', height: '150px' }} class="form-control" id="basic-default-name" name="rollno" onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
                    </form>
                </div >
            </div >

        </>
    )
}