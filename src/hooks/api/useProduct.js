import useAsync from '../useAsync';
import useToken from '../useToken';

import * as productApi from '../../services/productApi';

export function PostProduct() {
  const token = useToken();
  const {
    loading: productLoading,
    error: productError,
    act: CreateProduct
  } = useAsync((productName, productValue) => (productApi.CreateProduct(token , productName, productValue)));

  return {
    productLoading,
    productError,
    CreateProduct
  };
}
