'use client';

import Category from '@/components/categories/Category';
import { getSingleCategory } from '@/redux/categories/categorySlice';
import { useAppDispatch } from '@/redux/hooks';
import { CategoryProp } from '@/utils/types';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

type CategoryDataProps = {
  category: CategoryProp;
  expenses: ExpensesProps['expenses'];
};

type ExpensesProps = {
  expenses: [
    {
      id: number;
      name: string;
      amount: string;
      user_id: number;
      category_id: number;
      created_at: string;
      updated_at: string;
    }
  ];
};

const CategoryDetails = () => {
  const [categoryData, setCategory] = useState<CategoryDataProps>();
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState('');
  const [catInfo, setCatInfo] = useState<CategoryProp>();
  const [expenses, setExpenses] = useState<ExpensesProps['expenses']>();

  const calcWidth = (expense: string) => {
    let totalTransactionAmount = parseInt(catInfo!.cat_total_expenses);
    let percentage = (parseInt(expense) / totalTransactionAmount) * 100;
    let budgetAmount = (percentage / 100) * parseInt(catInfo!.cat_budget);
    let spentPercentage = (parseInt(expense) / budgetAmount) * 100;
    let result = 0;
    // if (catInfo && expenses) {
    //   result += (parseInt(expense) / parseInt(catInfo.cat_budget)) * 100;
    // }
    console.log();
    return spentPercentage;
  };

  const totalAmount =
    expenses &&
    expenses.reduce(
      (total, transaction) => total + parseInt(transaction.amount),
      0
    );

  useEffect(() => {
    if (isLoading) {
      const token = localStorage.getItem('token');
      setToken(token!);
    }
  }, [isLoading]);

  useEffect(() => {
    if (token && id) {
      setIsLoading(false);
      let payload = {
        token,
        id,
      };
      dispatch(getSingleCategory(payload)).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setCategory(res.payload);
        }
      });
    }
  }, [token, id, dispatch]);

  useEffect(() => {
    if (categoryData) {
      const { category, expenses } = categoryData;
      setCatInfo(category);
      setExpenses(expenses);
    }
  }, [categoryData]);

  return isLoading ? (
    <p>isLoading...</p>
  ) : (
    <section className="p-5">
      <div className="flex justify-between items-center mb-10">
        <Button
          color="success"
          className="rounded-full w-16 h-16"
          onClick={() => router.push('/categories')}
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

      {/* Category Info */}
      {catInfo && <Category category={catInfo} />}

      {/* List of transactions for the category */}
      {expenses && expenses.length > 0 ? (
        <div>
          {expenses.map((expense, index) => {
            return (
              <section key={expense.id} className="mb-6">
                <h3>{expense.name}</h3>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center bg-white w-12 h-12 rounded-l-xl text-black font-bold text-xl">
                    {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                  </div>

                  <div
                    className="relative h-12 bg-green-400 flex items-center justify-end rounded-r-xl"
                    style={{ width: `${calcWidth(expense.amount)}%` }}
                  >
                    <div
                      className="overlay absolute top-0 left-0 w-full h-full rounded-r-xl opacity-50"
                      style={{
                        backgroundImage:
                          "url('https://res.cloudinary.com/dskl0qde4/image/upload/v1680980949/abstract_gbndxj.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      }}
                    ></div>
                    <div className="relative z-20 px-1 py-3 flex justify-center items-center bg-red-400 rounded-r-xl text-sm font-bold">
                      ₵{expense.amount}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <p className="text-center font-bold text-xl">
          No transactions recorded. Add one!
        </p>
      )}
    </section>
  );
};

export default CategoryDetails;
