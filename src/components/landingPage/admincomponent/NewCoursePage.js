import react, { useState } from 'react'
import axios from "axios";

const NewCoursePage = () => {

  const [course, setCourse] = useState({
    id: "",
    collegecode: "1001",
    collegename: "XYZ college, place",
    courseid: "",
    coursename: "",
    status: "Y",
    coursetype: "",
    stream: "",
    details: "",
    duration: "",
    subject: "",
    subjectcode: "",
    degree: "",
    });

    const handleInputChange=(e)=>{
      const { name, value } = e.target;
      setCourse({ ...course, [name]: value })
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {

        const config = {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        };
        const response = await axios.post('http://localhost:9095/api/v1/admin/course/add', course, config);
        if (response.status === 200) {
          alert("course saved successfully !");
        }
      } catch (error) {
        console.log(error);
      }
    }

    return(
        <>
        <div class="card my-3 mx-4">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h5 class="mb-0">Add New Course</h5>
        </div>
        <div class="card-body" style={{'overflow-y': 'auto', 'max-height': '500px'}}>
          <form>
            <div class="row mb-3">
              <hr />
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Course Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="coursename" id="basic-default-name" onChange={handleInputChange} placeholder="Enter coursename" />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Course Type</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01" name="course_type" >
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                  </select>
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
                <label class="col-sm-2 col-form-label" for="basic-default-company">Duration</label>
                <div class="col-sm-10">
                  <select class="form-select" id="inputGroupSelect01" name="student_type" onChange={handleInputChange}>
                    <option selected value="3Y">3 Year</option>
                    <option value="2Y">2 Year</option>
                    <option value="1Y">1 Year</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row mb-3">
            <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Course Id</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="courseid" id="basic-default-name" onChange={handleInputChange} placeholder="Enter Course Id" />
                </div>
              </div>
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Subject Code</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="subjectcode" id="basic-default-name" onChange={handleInputChange} placeholder="Enter Subject Code" />
                </div>
              </div>
            </div>

            <div class="row mb-3">
            <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Degree</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="degree" id="basic-default-name" onChange={handleInputChange} placeholder="Enter degree" />
                </div>
              </div>
              
            </div>

            <div class="row mb-3">
              <div className="col-md-6">
                <label class="col-sm-2 col-form-label" for="basic-default-company">Details</label>
                <div class="col-sm-10">
                <textarea style={{ width: '600px', height: '150px' }}  class="form-control" id="basic-default-name" name="details" onChange={handleInputChange} />
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

export default NewCoursePage;