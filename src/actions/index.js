import axios from 'axios';

export const client = axios.create({
  baseURL: "http://localhost:4322",
  headers: {
    "Content-Type": "application/json"
  }
})
