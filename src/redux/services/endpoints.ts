import instance from './axios';

// const token = localStorage.getItem('token');

// Logout A User
export const logoutUser = async (token: string) => {
  return await instance.delete('/sign_out', {
    headers: {
      Authorization: token,
    },
  });
};
