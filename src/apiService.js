import Axios from 'axios';


const API_ROOT = 'https://ancient-tor-16694.herokuapp.com/api/v1/';

const responseBody = res => res.data;

const requests = {
    get: url =>
        Axios.get(`${API_ROOT}${url}`).then(responseBody)
};

const Posts = {
    all: page =>
        requests.get(`/posts/`)
};

export default {
    Posts
};
