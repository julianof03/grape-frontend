import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ingredientApi from '../../services/ingredientApi';

export default function useIngredient() {
  const token = useToken();
  const {
    loading: ingredientLoading,
    error: ingredientError,
    act: CreateIngredient
  } = useAsync((body) => (ingredientApi.CreateIngredient(token , body)));

  return {
    ingredientLoading,
    ingredientError,
    CreateIngredient
  };
}
