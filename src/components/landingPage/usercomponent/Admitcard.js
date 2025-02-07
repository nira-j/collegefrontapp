import React from "react";
import { useOutletContext } from "react-router-dom";

// React component
const AdmitCard = () => {
    const { userDetails } = useOutletContext();
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          PT. RAVISHANKAR SHUKLA UNIVERSITY, RAIPUR (C.G.)
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-2"><strong>Roll No:</strong> {studentInfo.rollNo}</p>
              <p className="mb-2"><strong>Candidate's Name:</strong> {studentInfo.name}</p>
              <p className="mb-2"><strong>Father's/Husband Name:</strong> {studentInfo.fatherName}</p>
              <p className="mb-2"><strong>Mother's Name:</strong> {studentInfo.motherName}</p>
              <p className="mb-2"><strong>Medium:</strong> {studentInfo.medium}</p>
            </div>
            <div className="col-md-6">
              <p className="mb-2"><strong>Enrollment No:</strong> {studentInfo.enrollmentNo}</p>
              <p className="mb-2"><strong>Status:</strong> {studentInfo.status}</p>
              <p className="mb-2"><strong>Center Name:</strong> {studentInfo.centerName}</p>
              <p className="mb-2"><strong>College Name:</strong> {studentInfo.collegeName}</p>
              <p className="mb-2"><strong>Permitted Subjects:</strong> {studentInfo.subjects.join(", ")}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 offset-md-3 text-center">
              <img src="/path/to/front_photo.jpg" alt="Front Facing" className="img-thumbnail" />
              <img src="/path/to/signature.jpg" alt="Signature" className="img-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitCard;
