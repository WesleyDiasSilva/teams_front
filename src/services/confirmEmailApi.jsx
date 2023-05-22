import api from './api';

export async function confirmEmail(code) {
  console.log('dentro do confirmEmail')
  const response = await api.get(`auth/validation-email/${code}`);
  return response.data;
} 