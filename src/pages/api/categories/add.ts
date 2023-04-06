// import { NewUserProps } from '@/utils/types';
// import axios from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';

// // type Data = {
// //   category?: NewUserProps;
// //   message: string;
// //   errors?: string[];
// //   token?: string;
// // };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const URL = process.env.NEXT_PUBLIC_BASE_URL;
//     const catObj = req.body.data;
//     console.log(catObj);
//     const response = await axios.post('http://127.0.0.1:3000/categories', catObj, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//       withCredentials: true,
//     });
//     // const token = response.headers.authorization;

//     const { message } = response.data;

//     // const currentUser: NewUserProps = {
//     //   name: user!.name,
//     //   username: user!.username,
//     //   income: user!.income,
//     //   email: user!.email,
//     // };

//     res.status(201).json({
//       message,
//     });
//   } catch (err: any) {
//     const message = err.response.data;
//     res.status(422).json({
//       message,
//     });
//   }
// }
