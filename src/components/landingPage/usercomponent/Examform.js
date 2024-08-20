import axios from "axios";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const ExamForm = (props) => {

  const { userDetails } = useOutletContext();
  const [courseslist, setCourseslist] = useState([]);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    fathername: '',
    mothername: '',
    dob: '',
    gender: '',
    category: '',
    mobileno: '',
    course: '',
    courseid: '',
    medium: '',
    collegename: '',
    collegecode: '',
    regno: '',
    enrollmentno: '',
    rollno: '',
    semyr: '',
    studentid: '',
    profileimage: '',
    signatureimage: '',
    payment_amount: '',
    payment_status: '',
    payment_date: '',
    address: '',
    state: '',
    pin: '',
    district: '',
    course_type: '',
    email_id: '',
    session: '',
    student_type: ''
  });

  async function getCourses(coursetype) {
    const response = await axios.get('http://localhost:9095/api/v1/get/courses/'+coursetype);
    setCourseslist(response.data)

  }

  useEffect(() => {
    getCourses('UG')
    setFormData({ 'studentid': userDetails.id })
  }, [])

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

  return (
    <>
      <div class="card my-3 mx-4">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h5 class="mb-0">Examination Form</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="row mb-3">
              <small class="text-muted float-end">Personal Details</small>
              <hr />
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">First Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="firstname" id="basic-default-name" onChange={handleInputChange} placeholder="Enter firstname" value={userDetails.firstname} />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Last Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="lastname" id="basic-default-company" onChange={handleInputChange} placeholder="Enter lastname" value={userDetails.lastname} />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Fathername</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="fathername" id="basic-default-name" onChange={handleInputChange} placeholder="Enter fathername" />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Mothername</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="mothername" id="basic-default-company" onChange={handleInputChange} placeholder="mothername" />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Email id</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" name="email_id" id="basic-default-name" onChange={handleInputChange} placeholder="Enter Email id." value={userDetails.emailid}/>
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Mobile no.</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="mobileno" id="basic-default-company" onChange={handleInputChange} placeholder="Enter mobile no." value={userDetails.mobilno}/>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Dob</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" name="dob" id="basic-default-name" onChange={handleInputChange} placeholder="Select Date" />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Gender</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01" name="gender" onChange={handleInputChange}>
                    <option selected value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Category</label>
                <select class="form-select" id="inputGroupSelect01" name="category" onChange={handleInputChange}>
                  <option selected value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option selected value="ST">ST</option>
                  <option value="GENERAL">GENERAL</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <small class="text-muted float-end">Acedemic Details</small>
              <hr />
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Course Type</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01" name="course_type" onChange={(e)=>{getCourses(e.target.value)}}>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <label className="col-sm-2 col-form-label" htmlFor="basic-default-company">Course</label>
                <div className="col-sm-10">
                  <select className="form-select" id="inputGroupSelect01" name="course" onChange={handleInputChange}>
                    {courseslist.map((course, index) => (
                      <option key={index} value={course.coursename}>{course.coursename}</option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Medium</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01" name="medium" onChange={handleInputChange}>
                    <option selected value="ENGLISH">ENGLISH</option>
                    <option value="HINDI">HINDI</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Centre</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01" name="centre" onChange={handleInputChange}>
                    <option selected>XYZ College, place</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Year</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01" name="semyr" onChange={handleInputChange}>
                    <option selected value="1">1st year</option>
                    <option value="2">2nd year</option>
                  </select>
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
                <label class="col-sm-2 col-form-label" for="basic-default-company">Session</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01" name="session" onChange={handleInputChange}>
                    <option selected value="2022-2023">2022-2023</option>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2024-2025">2024-2025</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Rollno</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="basic-default-name" name="rollno" onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <small class="text-muted float-end">Address</small>
              <hr />
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Street</label>
                <div class="col-sm-10">
                  <input type="text" name="address" class="form-control" id="basic-default-name" placeholder="Enter Place/street" onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Pin code</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="pin" id="basic-default-company" placeholder="Enter pin code" onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">District</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" name="district" id="basic-default-name" placeholder="District" onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">State</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="state" id="basic-default-company" placeholder="State" onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

          </form>
        </div >
      </div >
    </>
  );

};

export default ExamForm;