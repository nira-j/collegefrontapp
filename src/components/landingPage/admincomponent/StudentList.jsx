 import axios from 'axios'
import react, { useEffect, useState } from 'react'

export function StudentList() {

    const tblrowstyle={
        rowdata:{
            'padding': '0px'
        }
    }

    const [registeredStuList, setRegisteredStuList] = useState([]);

    const getAllregisteredStulist = async () => {
        try {
            const res = await axios.get('http://localhost:9095/api/v1/admin/registerstudent/list')
            if (res.data) {
                setRegisteredStuList(res.data);
            }
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getAllregisteredStulist();
    }, [])

    return (
        <>
            <div class="card mx-4 my-2">
                <div style={{'padding-top': '10px','padding-bottom': '5px', 'background-color': '#e6edf2'}}>
                    <h5 class="card-header" style={{'display': 'inline'}}>Registered Student List</h5>
                    <div style={{'float': 'right', 'margin-right':'30px', 'margin-bottom':'10px'}}>
                        <button type="button"  class="btn btn-sm rounded-pill btn-success" >Generate Enrollment</button>
                        <button type="button" class="btn btn-sm rounded-pill btn-success" >Generate Rollno</button>
                    </div>
                </div>
                <div class="table-responsive text-nowrap" style={{'overflow-y': 'auto', 'max-height': '500px'}}>
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>Form No</th>
                                <th>Student Name</th>
                                <th>Father Name</th>
                                <th>Category</th>
                                <th>Course Type</th>
                                <th>Course</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                        {
                                registeredStuList.map((student, index) => {
                                    return(
                                    <tr key={index}>
                                        <td style={tblrowstyle.rowdata}><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{student.form_no}</strong></td>
                                        <td>{student.firstname}</td>
                                        <td>{student.fathername}</td>
                                        <td>{student.category}</td>
                                        <td>{student.coursetype}</td>
                                        <td>{student.course}</td>
                                        <td>
                                            <button type="button" class="btn btn-sm rounded-pill btn-primary" >View Details</button>
                                            <button type="button" class="btn btn-sm rounded-pill btn-success mx-2" >Print</button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    )
}