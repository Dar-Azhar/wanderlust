import axios from "axios";
const link = "http://127.0.0.1:8000/"
// const link = "https://wanderlust.up.railway.app"
export default axios.create({
    baseURL: link
});
