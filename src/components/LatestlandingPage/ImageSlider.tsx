'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-[300px]"
    >
      <SwiperSlide className="relative w-full h-full">
         <Image src="/staff.png" alt="Slide 1" fill className="object-contain" />
      </SwiperSlide>
      <SwiperSlide className="relative w-full h-full">
         <Image src="/recruit.png" alt="Slide 2" fill className="object-contain" />
      </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
            <Image src="/onboard.png" alt="Slide 3" fill className="object-contain" />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
            <Image src="/train.png" alt="Slide 3" fill className="object-contain" />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
            <Image src="/team.png" alt="Slide 3" fill className="object-contain" />
        </SwiperSlide>
    </Swiper>
  );
};