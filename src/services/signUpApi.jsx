import api from './api';

export async function signUp({ email, password }) {
  const response = await api.post('/auth/login', {
    email,
    password,
  });
  return response.data;
} 