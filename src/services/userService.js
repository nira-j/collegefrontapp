import axios from '../api/CustomAxiosConfig';

class UserService{
    

    userSignin(userDetail){
        try{
            return axios.post('/auth/signin', {
                username: userDetail.username,
                password: userDetail.password
            });
        }catch(e){
            return e;
        }
    }
   

}

export default new UserService();