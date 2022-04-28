import Axios from "axios";

const ApiCall = Axios.create({
    baseURL: "https://reqres.in/api/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default ApiCall;
