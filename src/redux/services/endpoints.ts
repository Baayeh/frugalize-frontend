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

// Fetch single category
export const fetchSingleCategory = async ({
  token,
  id,
}: {
  token: string;
  id: string | string[];
}) => {
  return await instance.get(`categories/${id}`, {
    headers: { Authorization: token },
  });
};

// Add a category
export const createCategory = async ({ data, token }: NewCategoryProps) => {
  return await instance.post('categories', data, {
    headers: { 'Content-Type': 'multipart/form-data', Authorization: token },
  });
};

// Fetch all transactions
export const fetchAllTransactions = async (token: string) => {
  return await instance.get('expenses', {
    headers: { Authorization: token },
  });
};

// Fetch latest transaction
export const fetchLatestTransaction = async (token: string) => {
  return await instance.get('expense/latest', {
    headers: { Authorization: token },
  });
};

// Add a transaction
export const createTransaction = async ({
  data,
  token,
}: NewTransactionProps) => {
  return await instance.post('expenses', data, {
    headers: { Authorization: token },
  });
};
