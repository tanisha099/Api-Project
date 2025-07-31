import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3008/",
});
export default instance;