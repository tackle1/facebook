import axios from "axios";

export const getUser = () => {
    const API = axios.create({
        baseURL: "https://664b524535bbda10987c739f.mockapi.io"

    });
    return API.get("/api/v1/users");
}

export const createUser = () => { };
export const deleteUser = () => { };