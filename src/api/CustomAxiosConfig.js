import axios from 'axios';

const axiosInstance=axios.create({
    baseURL: "http://localhost:9095",
});

axiosInstance.interceptors.request.use((config)=>{
    config.headers["Authorization"]=localStorage.getItem("token");
    return config;
});

export default axiosInstance;