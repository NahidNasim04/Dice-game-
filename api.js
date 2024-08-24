import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const saveScore = (name, score) => api.post('/scores', { name, score });
export const getScores = () => api.get('/scores');
