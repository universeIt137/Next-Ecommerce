import axios from "axios";
const axiosPublic = axios.create({

    // baseURL: 'http://localhost:5000'

    baseURL: 'https://e-commerce-server-rosy.vercel.app/api/v1'
//     baseURL: 'https://server.universeitinstitute.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;