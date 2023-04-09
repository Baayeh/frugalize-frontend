'use client';

import Navigation from '@/components/navigation/Navigation';
import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';

type Props = {};

const Profile = (props: Props) => {
  const user = JSON.parse(localStorage.getItem('user')!);

  return (
    <>
      <section>
        <header className="relative bg-green-500 p-5 h-[10rem]">
          <h1 className="uppercase font-extrabold text-center text-3xl text-[#222]">
            {user && user.name}
          </h1>
          <div
            className="absolute left-[7.3rem] top-[6rem] w-[9rem] h-[9rem] rounded-full border-[0.5rem] bg-[#222]
            flex justify-center items-center
          "
          >
            <FaUserAlt className="text-[5rem]" />
          </div>
        </header>

        <div className="profile-header p-4 mt-24">
          <h2 className="relative uppercase pb-1 font-bold text-xl text-center before:absolute before:bottom-0 before:w-[14.5rem] before:h-[0.2rem] before:bg-white">
            Profile Information
          </h2>
          <div className="text-center text-lg mt-2">
            <p>
              Username: <span className='font-bold'>{user && user.username}</span>
            </p>
            <p className="my-3">
              Email: <span className='font-bold'>{user && user.email}</span>
            </p>
            <p>
              My Income: <span className='font-bold'>GH₵ {user && (parseFloat(user.income)).toFixed(2)}</span>
            </p>
            <p className="my-3">
              Account Status:{' '}
              <span className="bg-green-500 px-4 py-1 text-[#222] font-bold uppercase text-sm rounded-full">
                Active
              </span>
            </p>
          </div>
        </div>
      </section>

      <Navigation />
    </>
  );
};

export default Profile;
