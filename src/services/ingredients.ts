import { Ingredient } from '@prisma/client';
import { axiosInstance } from './axios';
import { API_ROUTES } from './apiRoutes';

export const getAll = async () => {
  const { data } = await axiosInstance.get<Ingredient[]>(API_ROUTES.INGREDIENTS);

  return data;
};
