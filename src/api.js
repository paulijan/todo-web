import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'https://localhost:8080/api/todo-svc',
});

export default api;
