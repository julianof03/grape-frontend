import api from './api';

export async function ListAllProducts(token, body) {

  console.log(body)
  const response = await api.get('/product/list', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
 