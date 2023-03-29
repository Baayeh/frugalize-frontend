import styles from '@/styles/Dashboard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcMoneyTransfer, FcPieChart } from 'react-icons/fc';
import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';
import { MdAccountBalance, MdCategory, MdHistory } from 'react-icons/md';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Dashboard = () => {
  const income = 1500;
  const balance = 1000;
  const spent = 500;

  return (
    <section className="p-5">
      <div className="text-2xl">
        <h2 className="font-bold flex gap-2">
          <span>&#x1F44B;</span>
          <span className="pt-1">Hi Kwasi</span>
        </h2>
      </div>

      {/* Income Section */}
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

      {/* Quick Actions */}
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
            href="/dashboard/categories"
            className={`${styles.action} flex flex-col justify-center items-center`}
          >
            <span>
              <MdCategory className="text-xl" />
            </span>
            <span className="text-sm">Categories</span>
          </Link>
          <Link
            href="/dashboard/transactions"
            className={`${styles.action} flex flex-col justify-center items-center`}
          >
            <span>
              <GiPayMoney className="text-xl" />
            </span>
            <span className="text-sm">Transactions</span>
          </Link>
        </div>
      </section>

      {/* Latest Transaction */}
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

      {/* Insights */}
      <section className="mt-8">
        <h2 className="font-bold text-xl mb-3">Insights</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="p-5 rounded-2xl bg-yellow-500 text-black w-[10rem]">
              <p className="uppercase text-sm">Spending</p>
              <div>
                <FcPieChart className="text-6xl" />
              </div>
              <p className="text-sm mt-2">
                Spent 75% of your budget on{' '}
                <span className="font-bold">Food & Drinks</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 rounded-2xl bg-[#97fce6] text-black w-[10rem]">
              <p className="uppercase text-sm">Do you know?</p>
              <div>
                <Image
                  src="https://res.cloudinary.com/dskl0qde4/image/upload/v1680080189/motivation_ynaoyx.png"
                  alt="Announcement"
                  width={60}
                  height={50}
                />
              </div>
              <p className="text-sm mt-2">
                Spent 75% of your budget on{' '}
                <span className="font-bold">Food & Drinks</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 rounded-2xl bg-[#ff0751] text-black w-[10rem]">
              <p className="uppercase text-sm">Spending</p>
              <div>
                <FcPieChart className="text-6xl" />
              </div>
              <p className="text-sm mt-2">
                Spent 75% of your budget on{' '}
                <span className="font-bold">Food & Drinks</span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="flex">
          <div className="p-5 rounded-xl bg-yellow-500 text-black">
            <p className="uppercase text-sm">Spending</p>
            <FcPieChart className="text-6xl" />
            <p>
              This month you spent 75% of your budget on{' '}
              <span>Food & Drinks</span>
            </p>
          </div>
        </div> */}
      </section>

      {/* Navigation */}
      
    </section>
  );
};

export default Dashboard;
