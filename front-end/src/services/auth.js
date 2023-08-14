//import axios from "axios";
import {instance} from "./axios";

const API = `http://localhost:5000/api`
//export const registerRequest = async (user) => axios.post(`${API}/auth/register`, user);
export const registerRequest = async (user) => instance.post(`/auth/register`, user);

export const loginRequest = async (user) => instance.post(`/auth/login`, user);

export const verifyTokenRequest = async () => instance.get(`/auth/verify`);