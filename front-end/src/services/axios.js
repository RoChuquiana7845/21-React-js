import axios from "axios";

// configurar axios con la url base del backend y para que acepte cokkie
export const instance = axios.create({
    baseURL: `http://localhost:5000/api`,
    withCredentials: true,
});

export const instance2 = axios.create({
    baseURL: `https://www.deckofcardsapi.com/api/deck/`,
});