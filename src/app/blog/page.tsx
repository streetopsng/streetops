"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { dispatchType, RootStateType } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { blogPostType, storeBlogs } from "@/store/slices/allBlogs";
import Footer from "@/components/LandingPageComponents/Footer";
import PagePreloader from "@/utils/PagePreloader";
import Header from "@/components/Training/header";
import Hero from "@/components/Training/hero";

async function fetchData() {
  const res = await fetch(`/api/blog/get-blogs`);
  if (!res.ok) {
    return {
      message: "something went wrong",
      success: false,
    };
  }
  const response = await res.json();
  return response;
}
const page = () => {
  const blogs = useSelector((store: RootStateType) => {
    return store.blogsReducer;
  });
  const dispatch = useDispatch<dispatchType>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["allblogs"],
    queryFn: fetchData,
  });

  useEffect(() => {
    console.log(data);
    if (data?.success) {
      dispatch(storeBlogs(data.data));
      localStorage.setItem("blogs", JSON.stringify(data.data));
    }
  }, [isLoading]);
  const router = useRouter();
  return (
    <div className="">
      {/* <TempHeader/> */}

      {/* <SlideContent/> */}
      {/* <div className="w-full lg:h-[80vh] h-[50vh] relative flex flex-col justify-center items-center px-8 text-center">

 <h1 className={`lg:text-5xl md:text-3xl text-2xl font-semibold animated-gradient-slide-text lg:w-[60%] w-full`}>Explore Experts Insights and Practical Tips on StreetOps</h1>  
 <p className={`md:text-xl text-lg lg:w-[60%] w-full `}>Stay informed and empowered with valuable articles, expert advice, and actionable tips to help you scale your operations</p> 
 </div> */}

      <div className="relative ">
        <>
          <div className="absolute h-full -z-1 w-full bg-linear-to-b from-[#FA2120] to-[#941413] " />
          <div
            className="absolute inset-0 opacity-25 -z-1"
            style={{
              backgroundImage: `url('/bric.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
        </>
        {<Header />}
        {/* Hero */}
        <section className="flex flex-col justify-between  min-h-[90vh]  pt-10 max-w-4xl mx-auto text-center px-6">
          {/* Main Content Container */}

          <aside>
            <h1 className="text-4xl Hero md:text-6xl lg:text-7xl font-bold text-white mb-5 font-serif leading-[1.15]  ">
              Explore Experts Insights <br /> and Practical <br /> Tips on
              StreetOps
            </h1>

            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Stay informed and empowered with valuable articles, expert advice,
              and actionable tips to help you scale your operations
            </p>
          </aside>
          {/* Input Field Area */}
          {/* <div className="flex items-center justify-center max-w-md mx-auto">
          <div className="flex w-full bg-white/20 backdrop-blur-sm rounded-full p-1.5 border border-white/20 shadow-lg">
            <Input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-none text-white text-base placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 h-11 px-5"
            />
            <Button className="bg-[#2d1f1f] hover:bg-[#3d2f2f] text-white rounded-full px-7 h-11 text-sm font-medium transition-all">
              Join waitlist
            </Button>
          </div>
        </div> */}

          {/* Bottom Image */}
          {/* <div className="flex justify-center w-full mt-16">
            <img
              src="/new-assets/blog.svg"
              alt="blog"
              className="max-w-[90%] md:max-w-[70%] h-auto object-contain select-none"
            />
          </div> */}
        </section>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl md:text-5xl font-bold text-thirdPrimary Hero md:mb-6 mb-2 tracking-tight text-center ">
          BLOGS
        </h1>
        {blogs.length < 1 && isLoading ? (
          <div className=" text-grayOne w-full h-[60vh] flex items-center justify-center flex-col">
            <PagePreloader />
            <h1 className="italic my-2 ">Loading Available Blogs...</h1>
          </div>
        ) : blogs.length < 1 ? (
          <div className="py-4">
            <h1 className="text-center text-primary text-lg">
              no blog available at the moment
            </h1>
          </div>
        ) : (
          ""
        )}

        {blogs.length > 0 && (
          <article className="mx-auto w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 ">
            {/* mapp through blog */}

            {blogs.map((item: blogPostType, index: any) => {
              return (
                <div
                  key={index}
                  className="text-grayOne cursor-pointer  w-[95%]"
                  onClick={() =>
                    router.push(
                      `/blog/${item.title
                        .replace(/ /g, "-")
                        .toLocaleLowerCase()}---${item._id}`
                    )
                  }
                >
                  <div className="relative w-[100%] min-h-[250px]">
                    <Image
                      src={item.imageUrl}
                      alt={item.date}
                      fill
                      className="absolute w-full h-full rounded-lg object-fit"
                    />
                  </div>
                  <div>
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <div>
                    <h1 className="font-bold text-lg text-grayTwo">
                      {item.title}
                    </h1>
                  </div>
                </div>
              );
            })}
          </article>
        )}
      </div>

      {/* <Footer/> */}
    </div>
  );
};

export default page;
