import api from './api';

export async function CreateProduct(token, productName, productValue) {
  const body = {
    productName,
    productValue
  }
  console.log(body, token)
  const response = await api.post('/product', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
 