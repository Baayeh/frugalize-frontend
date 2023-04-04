import { NewUserProps } from '@/utils/types';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  user?: NewUserProps;
  message: string;
  errors?: string[];
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const URL = process.env.NEXT_PUBLIC_BACKEND_URL_USERS;
    const userObj = req.body.user;
    const response = await axios.post(URL as string, {
      user: userObj,
    });
    const token = response.headers.authorization;

    const { user, message }: Data = response.data;

    const currentUser: NewUserProps = {
      name: user!.name,
      username: user!.username,
      income: user!.income,
      email: user!.email,
    };

    res.status(201).json({
      user: currentUser,
      message,
      token,
    });
  } catch (err: any) {
    const { message, errors } = err.response.data;
    res.status(422).json({
      message,
      errors,
    });
  }
}
