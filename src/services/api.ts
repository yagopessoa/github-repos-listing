import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.interceptors.request.use(
  (config) => {
    config.params = { sort: 'created' };
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
