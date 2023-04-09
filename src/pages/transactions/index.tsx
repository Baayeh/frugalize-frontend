import Transaction from '@/components/transactions/Transaction';
import { useAppDispatch } from '@/redux/hooks';
import { getAllTransactions } from '@/redux/transactions/transactionSlice';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

type TransactionsProps = {
  transactions: [
    {
      id: number;
      name: string;
      amount: string;
      category: string;
      cat_image: string;
    }
  ];
};

const AllTransactions = () => {
  const [transactions, setTransactions] =
    useState<TransactionsProps['transactions']>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getAllTransactions(token)).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setTransactions(res.payload);
        }
      });
    }
  }, [dispatch]);

  // console.log(transactions)

  return (
    <section>
      <div className="flex justify-between items-center p-4">
        <Button
          className="w-16 h-16 rounded-full"
          onClick={() => router.push('/dashboard')}
        >
          <span>
            <BsArrowLeft className="text-xl text-white" />
          </span>
        </Button>
        <Button
          onClick={() => router.push('/transactions/add')}
          className="bg-white text-black text-sm font-bold uppercase px-3 py-2 rounded hover:bg-gray-300 transition-all duration-300 ease-in-out"
        >
          Add new
        </Button>
      </div>
      {transactions && transactions.length > 0 ? (
        <section className="p-4">
          <h1 className="font-bold text-xl mb-4">All Transactions</h1>
          {transactions.map((transaction) => {
            return (
              <React.Fragment key={transaction.id}>
                <Transaction transaction={transaction} />
              </React.Fragment>
            );
          })}
        </section>
      ) : (
        <p className="text-center font-bold text-xl">
          No transactions available. Create one!
        </p>
      )}
    </section>
  );
};

export default AllTransactions;
