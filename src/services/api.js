import axios from "axios";

const api = axios.create({
    baseURL: "https://flashcard-api-mayck.herokuapp.com/api/colecoes."
});
export default api;