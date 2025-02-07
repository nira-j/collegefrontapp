import React, { useState } from 'react'
import axios from "axios";

const EnrollmentForm = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        fathername: '',
        mothername: '',
        isdomicile: '',
        dob: '',
        gender: '',
        category: '',
        emailid: '',
        mobileno: '',
        ishandicaped: '',
        profileimage: '',
        signatureimage: '',

        coursetype: '',
        appliedfor: '',
        courseid: '',

        pstreet: '',
        pstate: '',
        ppin: '',
        pdistrict: '',
        cstreet: '',
        cstate: '',
        cpin: '',
        cdistrict: '',

        mBoard: '',
        mSchool: '',
        mPassyear: '',
        mTotal: '',
        mObtained: '',
        mPercentage: '',
        mMarksheet: '',
        iBoard: '',
        iSchool: '',
        iPassyear: '',
        iTotal: '',
        iObtained: '',
        iPercentage: '',
        iMarksheet: '',

        ugUniversity: '',
        ugCollege: '',
        ugPassyear: '',

        ug1Session: '',
        ug1Total: '',
        ug1Obtained: '',
        ug1Percentage: '',
        ug1Marksheet: '',
        ug2Session: '',
        ug2Total: '',
        ug2Obtained: '',
        ug2Percentage: '',
        ug2Marksheet: '',
        ug3Session: '',
        ug3Total: '',
        ug3Obtained: '',
        ug3Percentage: '',
        ug3Marksheet: '',
        paymentAmount: '',
        paymentDate: '',
        paymentStatus: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:9095/api/v1/save/examform', formData);
          if (response.status === 200) {
            alert("Data saved successfully !");
          }
        } catch (error) {
          console.log(error);
        }
      }

    const handleCheckbox=()=>{
    
        setFormData({
            cstate:formData.pstate,
            cpin:formData.ppin,
            cstreet:formData.pstreet,
            cdistrict:formData.pdistrict
        })
    }

    return (
        <>
            <div class="card my-3 mx-4 px-5">
                <div class="card-header d-flex align-items-center justify-content-between">
                    <h5 class="mb-0">Registration Form</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row mb-3">
                            <small class="text-muted float-end">Personal Details</small>
                            <hr />
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="firstname">First Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="firstname" id="firstname" placeholder="Enter firstname" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="lastname">Last Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Enter lastname" onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="fathername">Father's Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="fathername" id="fathername" placeholder="Enter father's name" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="mothername">Mother's Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="mothername" id="mothername" placeholder="Enter mother's name" onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="gender">Gender</label>
                                <div class="col-sm-10">
                                    <select class="form-select" id="gender" name="gender" onChange={handleInputChange}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="dob">Date of Birth</label>
                                <div class="col-sm-10">
                                    <input type="date" class="form-control" name="dob" id="dob" placeholder="Select Date" onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="emailid">Email ID</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" name="emailid" id="emailid" placeholder="Enter email ID" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="mobileno">Mobile Number</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="mobileno" id="mobileno" placeholder="Enter mobile number" onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="category">Category</label>
                                <div class="col-sm-10">
                                    <select class="form-select" id="category" name="category" onChange={handleInputChange}>
                                        <option value="GENERAL">General</option>
                                        <option value="OBC">OBC</option>
                                        <option value="SC">SC</option>
                                        <option value="ST">ST</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="isdomicile">Is Domicile?</label>
                                <div class="col-sm-10">
                                    <select class="form-select" id="isdomicile" name="isdomicile" onChange={handleInputChange}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="ishandicaped">Is Handicapped?</label>
                                <div class="col-sm-10">
                                    <select class="form-select" id="ishandicaped" name="ishandicaped" onChange={handleInputChange}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <small class="text-muted float-end">Permanent Address</small>
                            <hr />

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label class="col-sm-2 col-form-label" for="pstreet">Street</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="pstreet" id="pstreet" placeholder="Enter street" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-sm-2 col-form-label" for="ppin">Pin</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="ppin" id="ppin" placeholder="Enter pin code" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-sm-2 col-form-label" for="pstate">State</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="pstate" id="pstate" placeholder="Enter state" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-sm-2 col-form-label" for="pdistrict">District</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="pdistrict" id="pdistrict" placeholder="Enter district" onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <small class="text-muted float-end">Current Address (is current and permanent address same <input name="checkb" type="checkbox" onChange={handleCheckbox}/>)</small>
                            <hr />

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label class="col-sm-2 col-form-label" for="cstreet">Street</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="cstreet" id="cstreet" value={formData.cstreet} placeholder="Enter street" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-sm-2 col-form-label" for="cpin">Pin</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="cpin" id="cpin" value={formData.ppin} placeholder="Enter pin code" onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="cstate">State</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="cstate" id="cstate" value={formData.pstate} placeholder="Enter state" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="col-sm-2 col-form-label" for="cdistrict">District</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="cdistrict" id="cdistrict" value={formData.pdistrict} placeholder="Enter district" onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <small class="text-muted float-end">Permanent Address</small>
                            <hr />
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label class="col-sm-2 col-form-label" for="pstreet">Course Type</label>
                                    <div class="col-sm-10">
                                        <select class="form-select" id="coursetype" name="coursetype" onChange={handleInputChange}>
                                            <option value="UG">UG</option>
                                            <option value="PG">PG</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-sm-2 col-form-label" for="ppin">Applied For</label>
                                    <div class="col-sm-10">
                                        <select class="form-select" id="appliedfor" name="appliedfor" onChange={handleInputChange}>
                                            <option value="Course1">Course1</option>
                                            <option value="Course2">Course2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <small class="text-muted float-end">Acedemic Details </small>
                            <hr />
                            <table>
                                <thead>
                                    <th>Acedemic</th>
                                    <th>Board</th>
                                    <th>School</th>
                                    <th>Passing Year</th>
                                    <th>Total</th>
                                    <th>Obtainrd</th>
                                    <th>Percentage</th>
                                    <th>Marksheet</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Matric</td>
                                        <td>
                                            <select name="" id="">
                                                <option value="">Jharkhand State Board</option>
                                                <option value="">CBSC</option>
                                                <option value="">ICSC</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="" id="">
                                                <option value="">Marwari High School</option>
                                                <option value="">St. Jhon High School</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="" id="">
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                                <option>2023</option>
                                                <option>2024</option>
                                            </select>
                                        </td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td>
                                            <input type="file" />
                                            <button>Upload</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Intermediate</td>
                                        <td>
                                            <select name="" id="">
                                                <option value="">Jharkhand State Board</option>
                                                <option value="">CBSC</option>
                                                <option value="">ICSC</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="" id="">
                                                <option value="">Marwari High School</option>
                                                <option value="">St. Jhon High School</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="" id="">
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                                <option>2023</option>
                                                <option>2024</option>
                                            </select>
                                        </td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td>
                                            <input type="file" />
                                            <button>Upload</button>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                        {
                            (formData.coursetype == 'PG') && (
                                <div class="row mb-3">
                                    <small class="text-muted float-end">Under Gratduate Details </small>
                                    <hr />
                                    <table>
                                        <thead>
                                            <th>Acedemic</th>
                                            <th>University</th>
                                            <th>College</th>
                                            <th>Passing Year</th>
                                            <th>Session</th>
                                            <th>Total</th>
                                            <th>Obtainrd</th>
                                            <th>Percentage</th>
                                            <th>Marksheet</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1st year</td>
                                                <td>
                                                    <select name="" id="">
                                                        <option value="">Jharkhand State Board</option>
                                                        <option value="">CBSC</option>
                                                        <option value="">ICSC</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option value="">Marwari High School</option>
                                                        <option value="">St. Jhon High School</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option>2019</option>
                                                        <option>2020</option>
                                                        <option>2021</option>
                                                        <option>2022</option>
                                                        <option>2023</option>
                                                        <option>2024</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option>2020-2021</option>
                                                        <option>2022-2023</option>
                                                    </select>
                                                </td>
                                                <td><input type="text" /></td>
                                                <td><input type="text" /></td>
                                                <td><input type="text" /></td>
                                                <td>
                                                    <input type="file" />
                                                    <button>Upload</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2nd year</td>
                                                <td>
                                                    <select name="" id="">
                                                        <option value="">Jharkhand State Board</option>
                                                        <option value="">CBSC</option>
                                                        <option value="">ICSC</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option value="">Marwari High School</option>
                                                        <option value="">St. Jhon High School</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option>2019</option>
                                                        <option>2020</option>
                                                        <option>2021</option>
                                                        <option>2022</option>
                                                        <option>2023</option>
                                                        <option>2024</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option>2020-2021</option>
                                                        <option>2022-2023</option>
                                                    </select>
                                                </td>
                                                <td><input type="text" /></td>
                                                <td><input type="text" /></td>
                                                <td><input type="text" /></td>
                                                <td>
                                                    <input type="file" />
                                                    <button>Upload</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3rd year</td>
                                                <td>
                                                    <select name="" id="">
                                                        <option value="">Jharkhand State Board</option>
                                                        <option value="">CBSC</option>
                                                        <option value="">ICSC</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option value="">Marwari High School</option>
                                                        <option value="">St. Jhon High School</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option>2019</option>
                                                        <option>2020</option>
                                                        <option>2021</option>
                                                        <option>2022</option>
                                                        <option>2023</option>
                                                        <option>2024</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="" id="">
                                                        <option>2020-2021</option>
                                                        <option>2022-2023</option>
                                                    </select>
                                                </td>
                                                <td><input type="text" /></td>
                                                <td><input type="text" /></td>
                                                <td><input type="text" /></td>
                                                <td>
                                                    <input type="file" />
                                                    <button>Upload</button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            )
                        }

                        <div>
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EnrollmentForm;