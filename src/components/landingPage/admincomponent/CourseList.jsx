import axios from 'axios';
import react, { useEffect, useState } from 'react'

export function CourseList() {

    const [coursesList, setCoursesList] = useState([]);

    const getAllCourses = async () => {
        try {
            const res = await axios.get('http://localhost:9095/api/v1/getall/courses')
            if (res.data) {
                setCoursesList(res.data);
            }
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    }

    const changeStatus=(status,courseId)=>{
        setCoursesList((prevCourses) =>prevCourses.map((course) =>course.id === courseId ? { ...course, status: status === 'Y' ? 'N' : 'Y' } : course));

        // coursesList.forEach(course => {
        //     if(course.courseid===courseId){
        //         alert(course.status)
        //     }
        // });
    }

    const deleteCourse = async (id, coursename)=>{
        try{
            const res = await axios.delete('http://localhost:9095/api/v1/delete/course/'+id);
            if(res.data){
                alert(coursename+' '+ res.data);
            }
        }catch(error){
            if(error){
                console.log(error);
                alert("something went wrong !");
            }
        }
        getAllCourses();
    }

    useEffect(() => {
        getAllCourses();
    }, [])

    return (
        <>
            <div class="card mx-4 my-2" style={{'overflow-x': 'auto', 'overflow-y': 'auto','max-height': '100vh'}}>
                <h5 class="card-header">Courses List</h5>
                <div class="table-responsive text-nowrap">
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Id</th>
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
                                        <td>{course.courseid}</td>
                                        <td>{course.coursetype}</td>
                                        <td>{course.stream}</td>
                                        <td>{course.subject}</td>

                                        <td>  {course.status=='Y' ? (<span class="badge bg-label-success me-1"><input type="checkbox" onChange={()=>changeStatus(course.status, course.courseid)}/> Active</span>) : (<span class="badge bg-label-danger me-1"><input type="checkbox" onChange={()=>changeStatus(course.status, course.courseid)}/> Deactive</span>)}</td>
                                        <td>
                                            {/* <div class="dropdown">
                                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i class="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div> */}
                                            <button type="button" class="btn btn-sm rounded-pill btn-primary m-2">Edit</button>
                                            <button type="button" class="btn btn-sm rounded-pill btn-primary" onClick={()=> deleteCourse(course.id, course.coursename)}>Delete</button>
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