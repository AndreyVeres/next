import { Api } from '@/services/apiClient';
import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';

interface ReturnedProps {
  ingredients: Ingredient[];
  loading: boolean;
}
export const useFilterIngredients = (): ReturnedProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Api.ingredients
      .getAll()
      .then((ingredients) => {
        setIngredients(ingredients);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    ingredients,
    loading,
  };
};
