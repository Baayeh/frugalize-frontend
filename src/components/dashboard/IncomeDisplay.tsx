import React from 'react';
import { FcMoneyTransfer } from 'react-icons/fc';

type Props = {
  income: number;
  balance: number;
  spent: number;
};

const IncomeDisplay = ({ income, balance, spent }: Props) => {
  return (
    <section>
      <div className="mt-10 flex justify-between items-center">
        <div>
          <p className="text-gray-400 mb-1">Net Balance</p>
          <h1
            className={`${
              balance === 0.5 * income
                ? 'text-yellow-500'
                : balance < 0.5 * income
                ? 'text-red-500'
                : 'text-green-400'
            } font-extrabold text-3xl`}
          >
            GH₵ {balance.toLocaleString()}
          </h1>
        </div>
        <FcMoneyTransfer className="text-[4rem]" />
      </div>
      <div className="flex justify-between gap-4 font-bold">
        <p>Income: GH₵ {income.toLocaleString()}</p>
        <p className="text-red-500">- GH₵ {spent.toLocaleString()}</p>
      </div>
    </section>
  );
};

export default IncomeDisplay;
