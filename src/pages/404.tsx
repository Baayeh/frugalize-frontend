import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const PageNotFound = (props: Props) => {
  return (
    <section className="flex flex-col h-screen w-full justify-center items-center text-center">
      <h1 className="text-3xl font-semibold">
        This page is under construction
      </h1>
      <div className="flex justify-center my-10">
        <Image
          src="https://res.cloudinary.com/dskl0qde4/image/upload/v1681038452/undraw_under_construction_-46-pa_h5bp27.svg"
          alt="Page Under Construction"
          width={300}
          height={300}
        />
      </div>

      <p className="text-2xl">Please check back soon</p>
      <div className="mt-10">
        <Link
          href="/dashboard"
          className="border border-[#97fce6] p-4 rounded-full text-[#97fce6] hover:text-green-700 hover:border-green-700 uppercase transition-all duration-300 ease-in-out"
        >
          Go back to dashboard
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
