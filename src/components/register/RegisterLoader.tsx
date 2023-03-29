import React from 'react';
import { Triangle } from 'react-loader-spinner';

type IsCompletedProp = {
  isCompleted: boolean;
};

const RegisterLoader = ({ isCompleted }: IsCompletedProp) => {
  return (
    <section className="absolute z-20 bg-[#222] w-full h-screen flex flex-col items-center justify-center">
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
      <h1 className="text-xl">
        {isCompleted ? 'Your account is ready' : 'Setting up your account in a moment'}
      </h1>
    </section>
  );
};

export default RegisterLoader;
