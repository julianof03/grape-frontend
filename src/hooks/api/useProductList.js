import useAsync from '../useAsync';
import useToken from '../useToken';

import * as productListApi from '../../services/listProductApi';

export function GetProductList() {
  const token = useToken();
  const {
    loading: productListLoading,
    error: productListError,
    act: ListAllProducts
  } = useAsync(() => (productListApi.ListAllProducts(token)));

  return {
    productListLoading,
    productListError,
    ListAllProducts
  };
}
