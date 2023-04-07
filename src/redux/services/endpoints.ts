import { NewCategoryProps, NewTransactionProps } from '@/utils/types';
import instance from './axios';

// Logout A User
export const logoutUser = async (token: string) => {
  return await instance.delete('users/sign_out', {
    headers: {
      Authorization: token,
    },
  });
};

// Fetch all categories
export const fetchAllCategories = async (token: string) => {
  return await instance.get('categories', {
    headers: { Authorization: token },
  });
};

// Add a category
export const createCategory = async ({ data, token }: NewCategoryProps) => {
  return await instance.post('categories', data, {
    headers: { 'Content-Type': 'multipart/form-data', Authorization: token },
  });
};
// Add a transaction
export const createTransaction = async ({ data, token }: NewTransactionProps) => {
  return await instance.post('expenses', data, {
    headers: { Authorization: token },
  });
};
