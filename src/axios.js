import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/clone-af3a0/us-central1/api" //API Cloud
});

export default instance;
