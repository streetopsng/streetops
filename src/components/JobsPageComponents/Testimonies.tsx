'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaGoogle } from "react-icons/fa";
import Image from 'next/image';

const testimonyList:{
    id: number;
    name: string;
    date: string;
    testimonyText: string;
    image: string;
}[] = [
    {
      id: 1,
      name: "James Olawale",
      date: "2024-10-15",
      testimonyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.",
      image: "/boy.jpg",
    },
    {
      id: 2,
      name: "Emeka Johnson",
      date: "2024-11-02",
      testimonyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.",
      image: "/boy.jpg",
    },
    {
      id: 3,
      name: "Samuel Adeyemi",
      date: "2025-01-21",
      testimonyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.",
      image: "/boy.jpg",
    },
    {
      id: 4,
      name: "Chinedu Okafor",
      date: "2025-03-08",
      testimonyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.",
      image: "/boy.jpg",
    },
    {
      id: 5,
      name: "Tunde Alabi",
      date: "2025-04-10",
      testimonyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi sed sapien dapibus ultrices.",
      image: "/boy.jpg",
    },
  ];
  
const Testimonies = () => {
  return (

    <div className='my-4'>
<header className='py-4'>
<h1 className='text-primary text-[2rem] text-center font-bold hidden md-block'>What Our Candidates say</h1>
<h1 className='text-primary text-[2rem] text-center font-bold md:hidden leading-[2rem]'>What Our 
    <br />
    Candidates say</h1>
</header>
    <Swiper
    modules={[Autoplay]}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
          0: {
              slidesPerView: 1,
            },
        768: {
            slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    }}
    >
      {
      testimonyList.map((item,index) => (
        <SwiperSlide key={index}>
          <div className="md:h-[250px] min-h-[250px] py-4 md:py-0  flex flex-col  justify-center items-center px-4 rounded-sm  bg-primary-200 mx-4">
          <header className='flex justify-between items-center  w-full'>
                {/* Container for image and names */}
            <div className='flex'>
            {/* Picture */}
         <div className='relative w-[50px] h-[50px] overflow-hidden'>
            <Image 
            src={item.image} 
            alt={item.name} fill 
            className='absolute w-full h-full rounded-full object-cover'
            /></div>
            {/* Names */}
            <div className=' ml-4'>
                <h1 className='font-semibold'>{item.name}</h1>
                <p className='text-[0.7rem]'>{item.date}</p>
            </div>
            </div>
            {/* Icon */}
            <div>
           <FaGoogle/>
            </div>
          </header>
          {/* text testimonies */}
          <section className='my-2 '>
<p>{item.testimonyText}</p>
          </section>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
  );
};

export default Testimonies;

