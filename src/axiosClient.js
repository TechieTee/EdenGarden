import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/image/',
  });

  export default axiosClient;