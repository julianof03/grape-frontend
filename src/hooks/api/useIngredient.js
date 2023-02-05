import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ingredientApi from '../../services/ingredientApi';

export function PostIngredient() {
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
