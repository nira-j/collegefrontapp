import react, { useEffect, useState } from 'react'
import DashboardCard from './DashboardCard';
import axios from '../../../api/CustomAxiosConfig'

export default function AdminDashboard() {

    const [status,setStatus]=useState({});
    const getDashboardDetails= async ()=>{
        try{
            const response= await axios.get('/api/v1/adm/admin/dashboard')
            if(response.data){
                setStatus(response.data);
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getDashboardDetails()
    },[])

    return (
        <>
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                    <div class="col-lg-5 mb-4 order-0">
                        <div class="card">
                            <div class="d-flex align-items-end row">
                                <div class="col-sm-7">
                                    <div class="card-body">
                                        <h5 class="card-title text-primary">Welcome ! 🎉</h5>
                                        <p class="mb-4">
                                            You have done <span class="fw-bold">72%</span> more sales today. Check your new badge in
                                            your profile.
                                        </p>

                                        <a href="javascript:;" class="btn btn-sm btn-outline-primary">View Badges</a>
                                    </div>
                                </div>
                                <div class="col-sm-5 text-center text-sm-left">
                                    <div class="card-body pb-0 px-0 px-md-4">
                                        <img src="" height="140" alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-4 order-1">
                        <div class="row">
                            <div class="col-lg-4 col-md-12 col-6 mb-4">
                                <DashboardCard name="Exam Form Count" status={status.examform}/>
                            </div>
                            <div class="col-lg-4 col-md-12 col-6 mb-4">
                                <DashboardCard name="Registration Count" status={status.registration}/>
                            </div>
                            <div class="col-lg-4 col-md-12 col-6 mb-4">
                                <DashboardCard name="Courses Count" status={status.coursescount}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}