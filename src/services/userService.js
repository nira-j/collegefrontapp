import axios from 'axios';

const baseApi=""
class UserService{

    userSignin(userDetail){
        try{
            alert(userDetail.username+"---"+userDetail.password)
            return axios.post('http://localhost:9095/auth/signin', {
                username: userDetail.username,
                password: userDetail.password
            });
        }catch(e){
            return e;
        }
    }
    getUser(id){
        return axios.get(baseApi);
    }
}

export default new UserService();