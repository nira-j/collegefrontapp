import axios from 'axios'

const baseApi=""
class UserService{

    getUser(id){
        return axios.get(baseApi);
    }
}

export default new UserService();