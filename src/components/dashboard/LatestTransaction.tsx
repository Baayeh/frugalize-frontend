import { LatestProps } from '@/utils/types';
import moment from 'moment';
import React from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';

type LatestTransactionProps = {
  latest: LatestProps;
};

const LatestTransaction = ({ latest }: LatestTransactionProps) => {
  const dayFormatter = () => {
    let day = parseInt(moment(latest.created_at).format('D'));
    let newDay = '';
    if (day < 10) {
      newDay = '0' + day;
    }
    return newDay;
  };

  return (
    <section className="mt-8">
      <h2 className="font-bold text-xl">Latest Transaction</h2>
      <div className="flex items-center gap-2 my-4">
        <div className="flex flex-col w-[8%]">
          <span className="font-extrabold text-2xl">{dayFormatter()}</span>
          <span className="leading-3">
            {moment(latest.created_at).format('MMM')}
          </span>
        </div>
        <div className="card px-3 py-4 bg-[#47d7e71f] rounded-xl w-[92%] flex items-center gap-1">
          <GiTakeMyMoney className="text-5xl" />
          <div>
            <p className="font-bold">{latest.name}</p>
            <p className="text-sm text-gray-400">{latest.category}</p>
          </div>
          <div className="grow text-end">
            <p className="text-red-500 font-bold">- GH₵ {latest.amount}</p>
            <p className="text-xs text-right text-gray-400">
              {moment(latest.created_at).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTransaction;
