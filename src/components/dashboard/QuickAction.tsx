import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';
import React from 'react';
import { GiPayMoney } from 'react-icons/gi';
import { MdAccountBalance, MdCategory, MdHistory } from 'react-icons/md';

type Props = {};

const QuickAction = (props: Props) => {
  return (
    <section className="mt-5">
      <div className="relative mini-bar p-2 rounded-2xl flex justify-around bg-[#97fce6] text-black">
        <Link
          href="/dashboard/history"
          className={`${styles.action} flex flex-col justify-center items-center`}
        >
          <span>
            <MdHistory className="text-xl" />
          </span>
          <span className="text-sm">History</span>
        </Link>
        <Link
          href="/dashboard/account"
          className={`${styles.action} flex flex-col justify-center items-center`}
        >
          <span>
            <MdAccountBalance className="text-xl" />
          </span>
          <span className="text-sm">Account</span>
        </Link>
        <Link
          href="/categories"
          className={`${styles.action} flex flex-col justify-center items-center`}
        >
          <span>
            <MdCategory className="text-xl" />
          </span>
          <span className="text-sm">Categories</span>
        </Link>
        <Link
          href="/transactions"
          className={`${styles.action} flex flex-col justify-center items-center`}
        >
          <span>
            <GiPayMoney className="text-xl" />
          </span>
          <span className="text-sm">Transactions</span>
        </Link>
      </div>
    </section>
  );
};

export default QuickAction;
