'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Props = {
  children: any;
};

const RouteGuard = ({ children }: Props) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  // const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  // useEffect(() => {
  //   const getToken = () => {
  //     return new Promise((resolve) => {
  //       localStorage.getItem('token') &&
  //         setToken(localStorage.getItem('token'));
  //       resolve('done');
  //     });
  //   };

  //   getToken().then(() => {
  //     if (!token) {
  //       setAuthorized(false);
  //       router.push('/auth/login');
  //     } else {
  //       setAuthorized(true);
  //     }
  //   });
  // }, [router, token]);

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    const authCheck = async () => {
      if (!userToken) {
        setAuthorized(false);
        await router.push('/auth/login');
      } else {
        setAuthorized(true);
      }
    };

    void authCheck();
  }, [router]);

  return authorized && children;
};

export default RouteGuard;
