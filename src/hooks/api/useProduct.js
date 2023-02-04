import useAsync from '../useAsync';
import useToken from '../useToken';

import * as productApi from '../../services/productApi';

export default function useProduct() {
  const token = useToken();
  const {
    loading: productLoading,
    error: productError,
    act: CreateProduct
  } = useAsync((ProductName) => (productApi.CreateProduct(token , ProductName)));

  return {
    productLoading,
    productError,
    CreateProduct
  };
}
