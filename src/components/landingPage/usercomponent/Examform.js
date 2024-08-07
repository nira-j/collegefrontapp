import axios from "axios";
import { useState } from "react";

const ExamForm = (props) => {
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9099/api/v1/save/examform', formData);
      if (response.status === 200) {

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
          <small class="text-muted float-end">Default label</small>
        </div>
        <div class="card-body">
          <form>
            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">First Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="basic-default-name" placeholder="Enter firstname" />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Last Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="basic-default-company" placeholder="Enter lastname" />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Fathername</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="basic-default-name" placeholder="Enter fathername" />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Mothername</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="basic-default-company" placeholder="mothername" />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Email id</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="basic-default-name" placeholder="Enter Email id." />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Mobile no.</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="basic-default-company" placeholder="Enter mobile no." />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Dob</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="basic-default-name" placeholder="Select Date" />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Gender</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Course</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected value="REGULAR">BSC</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Student Type</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected value="REGULAR">REGULAR</option>
                    <option value="ATKT">ATKT</option>
                    <option value="EX-REGULAR">EX-REGULAR</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Course</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected value="ENGLISH">ENGLISH</option>
                    <option value="HINDI">HINDI</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Centre</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected value="REGULAR">XYZ College, place</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Year</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected value="1">1st year</option>
                    <option value="2">2nd year</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Course Type</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01">
                    <option value="REGULAR">UG</option>
                    <option value="REGULAR">PG</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Session</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected value="2022-2023">2022-2023</option>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2024-2025">2024-2025</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Rollno</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="basic-default-name" readOnly />
                </div>
              </div>
            </div>
          </form>
        </div >
      </div >
    </>
  );

};

export default ExamForm;