// @ts-ignore
import axios from 'axios';

const API_URL = 'http://localhost:3000';
console.log('F', API_URL);
const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
