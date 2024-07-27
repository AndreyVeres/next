import { Product } from '@prisma/client';
import { axiosInstance } from './axios';
import { API_ROUTES } from './apiRoutes';

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<Product[]>(API_ROUTES.SEARCH_PRODUCTS, { params: { query } });

  return data;
};
