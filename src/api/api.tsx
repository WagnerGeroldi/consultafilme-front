import axios from "axios";

const baseURL = "https://backend-consultadefilme.vercel.app";

const api = axios.create({
  baseURL: baseURL,

  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
