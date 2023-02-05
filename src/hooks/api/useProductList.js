import useAsync from '../useAsync';
import useToken from '../useToken';

import * as productListApi from '../../services/listProductApi';

export default function useProoduct() {
  const token = useToken();
  const {
    loading: productListLoading,
    error: productListError,
    act: ListAllProducts
  } = useAsync((body) => (productListApi.ListAllProducts(token)));

  return {
    productListLoading,
    productListError,
    ListAllProducts
  };
}
