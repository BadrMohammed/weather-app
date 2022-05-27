import axios from 'axios';
import { deleteLocalStorage, getLocalStorage } from './storage-service';
// TODO to be changes to env file
const apiUrl = '';
const publicAPIS = [
  '/',
];

const isPublicAPI = (url: string) => publicAPIS.find((endpoint) => apiUrl + endpoint === url);

const interceptor = {
  setupInterceptors: async (history: any) => {
    axios.interceptors.request.use((req: any) => {
      if (isPublicAPI(req.url)) return req;

      req.headers.Authorization = `Bearer ${getLocalStorage('token')}`;
      return req;
    }, (err) => Promise.reject(err));

    axios.interceptors.response.use((res) => res, (error) => {
      if (error.response.status === 401) {
        deleteLocalStorage('token');
        history.push('/');
      }
      return Promise.reject(error);
    });
  },
};

export default interceptor;
