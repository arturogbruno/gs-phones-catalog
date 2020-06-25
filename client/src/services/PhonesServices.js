import axios from "axios";

export default class PhonesServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`,
            withCredentials: true,
        });
    }

    getAllPhones = () => this.service.get()
        .then(response => response.data)
        .catch(err => console.log(err));
}
