const {default: axios} = require('axios');

const axiosClient = axios.create({ 
    baseURL: 'http://localhost:5000',
});

const createUser = (data) => {
    return axiosClient.post('/user', data);
};

export default{
    createUser,
}
