"use client";

import { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { dispatchType, RootStateType } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { blogPostType, storeBlogs } from "@/store/slices/allBlogs";
// import Footer from "@/components/LatestlandingPage/footer";
import PagePreloader from "@/utils/PagePreloader";

import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import ReadyToBuild from "@/components/AboutUsComponents/ready-to-build";
import Nav from "@/components/StreetopsLandingPage/Nav";
import Footer from "@/components/AnotherLandingPage/Components/Footer";
gsap.registerPlugin(ScrambleTextPlugin);
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

  useEffect(() => {
    gsap.to(".span-text", {
      duration: 2,
      scrambleText: "Explore Experts Insights",
    });
    gsap.to(".span-text-2", {
      duration: 2,
      scrambleText: "Tips on StreetOps",
    });
  }, []);
  const router = useRouter();
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <br />
      <br />
      <br />
      <div className="mt-8">
        {/* <h1 className="text-3xl Hero md:text-5xl font-bold text-thirdPrimary Hero md:mb-6 mb-2 tracking-tight text-center ">
          Blogs
        </h1> */}
        {blogs.length < 1 && isLoading ? (
          <div className=" text-grayOne w-full h-[60vh] flex items-center justify-center flex-col">
            <PagePreloader />
            <h1 className="italic my-2 ">Loading Available Blogs...</h1>
          </div>
        ) : blogs.length < 1 ? (
          <div className="py-4">
            <h1 className="text-center text-primary text-lg">
              blogs not available
            </h1>
          </div>
        ) : (
          ""
        )}

        {blogs.length > 0 && (
          <article className="mx-auto w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-4 gap-y-8  justify-center  justify-items-center">
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
                        .toLocaleLowerCase()}---${item._id}`,
                    )
                  }
                >
                  <div className="relative w-full min-h-62.5">
                    <Image
                      src={item.imageUrl}
                      alt={item.date}
                      fill
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <div>
                    <h1 className=" font-semibold  text-grayTwo">
                      {item.title}
                    </h1>
                  </div>
                </div>
              );
            })}
          </article>
        )}
      </div>
      <ReadyToBuild />
      <Footer />
    </div>
  );
};

export default page;
