import axios from 'axios';

const api = axios.create({
  baseURL: 'leodega-soft-ll-production-a8de.up.railway.app/',  
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
  
export default api;
