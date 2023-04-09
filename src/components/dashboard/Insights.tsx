import React from 'react';
import { FcPieChart } from 'react-icons/fc';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

type Props = {};

const Insights = (props: Props) => {
  return (
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
      </Swiper>
    </section>
  );
};

export default Insights;
