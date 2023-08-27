import axios from 'axios';
const instance = axios.create({
    // baseURL: "http://127.0.0.1:5001/clone-project-65460/us-central1/api",
    baseURL: 'https://amazon-server-trov.onrender.com/'
    // The above base URL also called API key came from the firebase after running $firebase emuliators:start

})  
export default instance;

// http://localhost:5001/fir-437f4/us-central1/api