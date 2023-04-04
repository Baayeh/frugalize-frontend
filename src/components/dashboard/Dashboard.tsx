'use client';

import IncomeDisplay from '@/components/dashboard/IncomeDisplay';
import Insights from '@/components/dashboard/Insights';
import LatestTransaction from '@/components/dashboard/LatestTransaction';
import QuickAction from '@/components/dashboard/QuickAction';
import Navigation from '@/components/navigation/Navigation';
import { AppDispatch } from '@/redux/store';
import { signUserOut } from '@/redux/users/userSlice';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

type Props = {};

const Dashboard = (props: Props) => {
  const income = 1500;
  const balance = 1000;
  const spent = 500;
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    dispatch(signUserOut(token!));
    localStorage.clear();
    router.push('/auth/login');
  };

  return (
    <>
      <section className="px-5 pt-5 pb-[6rem]">
        <div className="text-2xl flex justify-between items-center">
          <h2 className="font-bold flex gap-2">
            <span>&#x1F44B;</span>
            <span className="pt-1">Hi Kwasi</span>
          </h2>
          <Button className="rounded-full p-2 w-16 h-16" onClick={handleLogout}>
            <BiLogOutCircle className="text-3xl" />
          </Button>
        </div>

        <IncomeDisplay balance={balance} income={income} spent={spent} />

        <QuickAction />

        <LatestTransaction />

        <Insights />
      </section>

      <Navigation />
    </>
  );
};

export default Dashboard;
