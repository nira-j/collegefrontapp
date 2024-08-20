import axios from 'axios';
import react, { useEffect, useState } from 'react'

export function CourseList() {

    const [coursesList, setCoursesList] = useState([]);

    const getAllCourses = async () => {
        try {
            const res = await axios.get('http://localhost:9095/api/v1/get/courses')
            if (res.data) {
                setCoursesList(res.data);
            }
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getAllCourses();
    }, [])

    return (
        <>
            <div class="card mx-4 my-3" style={{'overflow-x': 'auto', 'overflow-y': 'auto'}}>
                <h5 class="card-header">Courses List</h5>
                <div class="table-responsive text-nowrap">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Type</th>
                                <th>Stream</th>
                                <th>Subject</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">

                            {
                                coursesList.map((course, index) => {
                                    return(
                                    <tr key={index}>
                                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{course.coursename}</strong></td>
                                        <td>{course.coursetype}</td>
                                        <td>{course.stream}</td>
                                        <td>{course.subject}</td>

                                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                                        <td>
                                            <div class="dropdown">
                                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i class="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
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