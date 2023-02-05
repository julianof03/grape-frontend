import api from './api';

export async function CreateIngredient(token, body) {

  console.log(body)
  const response = await api.post('/ingredient', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
 