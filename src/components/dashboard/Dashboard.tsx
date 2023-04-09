'use client';

import IncomeDisplay from '@/components/dashboard/IncomeDisplay';
import Insights from '@/components/dashboard/Insights';
import LatestTransaction from '@/components/dashboard/LatestTransaction';
import QuickAction from '@/components/dashboard/QuickAction';
import Navigation from '@/components/navigation/Navigation';
import { useAppDispatch } from '@/redux/hooks';
import {
  getLatestTransaction,
  getTotalExpenses,
} from '@/redux/transactions/transactionSlice';
import { signUserOut } from '@/redux/users/userSlice';
import { LatestProps, NewUserProps } from '@/utils/types';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');
  const userString = localStorage.getItem('user');
  const [latestTransaction, setLatestTransaction] = useState<LatestProps>();
  const [user, setUser] = useState<NewUserProps>();
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [netBalance, setNetBalance] = useState<number>(0);

  const handleLogout = () => {
    dispatch(signUserOut(token!)).then((res) => {
      const { message } = res.payload;
      MySwal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      localStorage.clear();
      router.push('/auth/login');
    });
  };

  useEffect(() => {
    if (token) {
      dispatch(getLatestTransaction(token)).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setLatestTransaction(res.payload);
        }
      });

      dispatch(getTotalExpenses(token)).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setExpenses(res.payload);
        }
      });
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, [userString]);

  useEffect(() => {
    if (user) {
      setIncome(user.income);
    }
  }, [user]);

  useEffect(() => {
    if (income && expenses) {
      setNetBalance(income - expenses);
    }
  }, [income, expenses]);

  return (
    <>
      <section className="px-5 pt-5 pb-[6rem]">
        <div className="text-2xl flex justify-between items-center">
          <h2 className="font-bold flex gap-2">
            <span>&#x1F44B;</span>
            <span className="pt-1">
              Hi {user && <span>{user.name.split(' ')[0]}</span>}
            </span>
          </h2>
          <Button className="rounded-full p-2 w-16 h-16" onClick={handleLogout}>
            <BiLogOutCircle className="text-3xl" />
          </Button>
        </div>

        <IncomeDisplay balance={netBalance} income={income} spent={expenses} />

        <QuickAction />

        {latestTransaction && <LatestTransaction latest={latestTransaction} />}

        <Insights />
      </section>

      <Navigation />
    </>
  );
};

export default Dashboard;
