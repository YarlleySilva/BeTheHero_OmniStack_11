import axios from "axios";

const api = axios.create({
  //Mude para seu IPv4
  baseURL: "http://192.168.1.105:3333",
});

export default api;