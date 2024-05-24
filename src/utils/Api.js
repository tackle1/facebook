import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: "https://664b524535bbda10987c739f.mockapi.io/"
    });
}