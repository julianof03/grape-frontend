import api from './api';

export async function CreateProduct(token, ProductName) {
  const body = {
    ProductName,
  }
  console.log(body, token)
  const response = await api.post('/product', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
 