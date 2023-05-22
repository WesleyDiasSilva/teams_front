import api from './api';

export async function signIn({ email, password, name, last_name }) {
  const response = await api.post('/auth/register', {
    email,
    password,
    name, 
    last_name
  });
  return response.data;
} 