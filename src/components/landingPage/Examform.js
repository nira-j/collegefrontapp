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
    </>
  );

};


export default ExamForm;