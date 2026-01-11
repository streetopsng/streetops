"use client";

import Footer from "@/components/LatestlandingPage/footer";
import Header from "@/components/LatestlandingPage/header";
import { Button } from "@/components/ui/button";
import { RootStateType } from "@/store";
import PagePreloader from "@/utils/PagePreloader";
import { useMutation } from "@tanstack/react-query";

import Image from "next/image";
import Link from "next/link";

import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type contentType = {
  content: string;
  createdAt: string;
  date: string;
  imageUrl: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

async function fetchBlog(id: string) {
  const res = await fetch(`/api/blog/${id}`);
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
  const { slug } = useParams();
  const [content, setContent] = useState<Partial<contentType>>({});
  // const blogs = useSelector((store:RootStateType)=>{
  //     return store.blogsReducer
  //         })
  const value = slug as string;

  const mutation = useMutation({
    mutationFn: fetchBlog,
    onSuccess: (data) => {
      console.log(data);
      setContent(data.data);
    },
    onError: (data) => {
      alert("cant fetch blog at the moment,please reload the site");
    },
  });

  const pathName = usePathname();

  useEffect(() => {
    mutation.mutate(value.split("---")[1]);
  }, []);
  if (!slug) {
    return <div>blog not available</div>;
  }
  // const getLastValue = value.split("-")[value.split("-").length - 1]

  //     const content = blogs.find(item => item._id.toString() == getLastValue)

  // // console.log(content);
  // if (!content) {
  //     return <div>
  //         content unavailable
  //     </div>
  // }

  return (
    <div className="text-grayOne ">
      <header className="lg:py-4 py-2 lg:px-8 px-4 z-30 bg-primary">
        <div className="max-w-7xl mx-auto flex items-center justify-between ">
          <div className="relative lg:w-37.5 h-10  w-31.25">
            <Link href="/">
              <Image
                className="absolute w-full h-full object-contain cursor-pointer"
                fill
                src={"/streetopslogo.png"}
                alt="logo"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 ">
            <Link
              href="/#about"
              className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
            >
              About
            </Link>
            {/* <Link
            href="#ratecard"
            className="text-white Hero text-sm hover:text-white/80 transition-colors"
          >
            Products
          </Link> */}
            <Link
              href="/#services"
              className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-white Hero text-sm hover:text-gray-300 transition-colors duration-500"
            >
              How it works
            </Link>
          </nav>

          {pathName == "/blog" ? (
            <Link href="/">
              <Button className="bg-white  text-slate-700 Hero rounded-full px-6 text-sm cursor-pointer hover:bg-white hover:text-primary transition duration-300 ">
                Home
              </Button>
            </Link>
          ) : (
            <Link href="/blog">
              <Button className="bg-white  text-slate-700 Hero rounded-full px-6 text-sm cursor-pointer hover:bg-white hover:text-primary transition duration-300 ">
                Blog
              </Button>
            </Link>
          )}
          {/* <Link href="/blog">
          <Button className="bg-primary  text-white Hero rounded-full px-6 text-sm cursor-pointer hover:bg-white hover:text-primary transition duration-300 ">
            Blog
          </Button>
        </Link> */}
        </div>
      </header>

      {mutation.isPending && (
        <div className=" text-grayOne w-full h-[80vh] flex items-center justify-center flex-col">
          <PagePreloader />
          <h1 className="italic my-2 ">Loading blog content</h1>
        </div>
      )}

      {mutation.isError && (
        <div className=" text-grayOne w-full h-[60vh] flex items-center justify-center flex-col">
          <h1 className="italic my-2 ">
            An error occured while trying to fetch blog post.
          </h1>
        </div>
      )}

      {mutation.isSuccess && (
        <article className="lg:px-16 md:px-8 px-4 my-8">
          <section className="">
            <span className="text-sm">{content?.date}</span>
          </section>
          <section className="my-8">
            <h1 className="font-semibold lg:text-3xl text-lg">
              {content?.title}
            </h1>
          </section>
          <div
            className="text-grayOne md:text-[1rem] leading-8"
            dangerouslySetInnerHTML={{ __html: content.content as string }}
          ></div>
        </article>
      )}

      <Footer />
    </div>
  );
};

export default page;
