import React from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';

type Props = {};

const LatestTransaction = (props: Props) => {
  return (
    <section className="mt-8">
      <h2 className="font-bold text-xl">Latest Transaction</h2>
      <div className="flex items-center gap-2 my-4">
        <div className="flex flex-col w-[10%]">
          <span className="font-extrabold text-2xl">29</span>
          <span className="leading-3">Mar</span>
        </div>
        <div className="card px-3 py-4 bg-[#47d7e71f] rounded-xl flex items-center gap-4 w-[90%]">
          <GiTakeMyMoney className="text-5xl" />
          <div>
            <p className="font-bold">Hamburger</p>
            <p className="text-sm text-gray-400">Food & Drinks</p>
          </div>
          <p className="text-red-500 font-bold grow text-end">- GH₵ 40</p>
        </div>
      </div>
    </section>
  );
};

export default LatestTransaction;
