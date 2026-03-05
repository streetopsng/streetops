"use client";
import { dispatchType, RootStateType } from "@/store";
import { storeBlogs } from "@/store/slices/allBlogs";
import PagePreloader from "@/utils/PagePreloader";
import { isPending } from "@reduxjs/toolkit";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

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

async function deleteBlog(id: string) {
  const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
  if (!res.ok) {
    return {
      message: "something went wrong",
      success: false,
    };
  }
  const response = await res.json();
  return response;
}
const Page = () => {
  const mutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: (data) => {
      // console.log(data);
      console.log(data);
      if (data.success) {
        toast.success(data?.message);
        window.location.reload();
      } else {
        toast.success(data?.message || "something went wrong");
      }
    },
    onError: (data) => {
      toast.error("cant delete blog now");
    },
  });
  const [deletingId, setDeletingId] = useState<string>("");
  // get blog
  const { data, isLoading, error } = useQuery({
    queryKey: ["allblogs"],
    queryFn: fetchData,
  });
  const blogs = useSelector((store: RootStateType) => {
    return store.blogsReducer;
  });
  const dispatch = useDispatch<dispatchType>();

  useEffect(() => {
    console.log(data);
    if (data?.success) {
      dispatch(storeBlogs(data.data));
      localStorage.setItem("blogs", JSON.stringify(data.data));
    }
  }, [isLoading]);

  const handleDelete = (id: string) => {
    console.log(id);
    if (!id) {
      toast.error("invalid");
      return;
    }
    mutation.mutate(id);
  };
  return (
    <div className="max-w-xl mx-auto lg:px-4 px-2">
      <h1 className="mt-8 font-semibold text-center text-2xl underline">
        blogs
      </h1>
      {isLoading && (
        <div className=" text-grayOne w-full h-[60vh] flex items-center justify-center flex-col">
          <PagePreloader />
          <h1 className="italic my-2 ">Loading Available Blogs...</h1>
        </div>
      )}

      {blogs.length < 1 && !isLoading && (
        <div className="py-4">
          <h1 className="text-center text-primary text-lg">
            no blog available at the moment
          </h1>
        </div>
      )}

      {!isLoading &&
        blogs.length > 0 &&
        [...blogs].reverse().map((item) => {
          return (
            <div
              key={item._id}
              className="flex justify-between  items-center my-2 gap-x-2 border-b border-gray-800"
            >
              <section>
                <h1 className="font-semibold ">
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </h1>
                <div
                  className="text-grayOne md:text-[1rem] leading-8"
                  dangerouslySetInnerHTML={{
                    __html: (item.content.slice(0, 30) as string) + "...",
                  }}
                ></div>
              </section>
              {/* Action */}
              <section className="flex flex-col gap-y-2">
                <button
                  disabled={mutation.isPending}
                  onClick={() => {
                    handleDelete(item._id);
                    setDeletingId(item._id);
                  }}
                  className="bg-red-500 hover:bg-red-800 p-2 rounded-md cursor-pointer border-none text-white w-30 flex justify-center items-center"
                >
                  {mutation.isPending && deletingId === item._id ? (
                    <Loader2 className="animate-spin h-6 w-6" />
                  ) : (
                    "Delete"
                  )}
                </button>
                <span className="text-xs text-center">{item.date}</span>
              </section>
            </div>
          );
        })}
    </div>
  );
};

export default Page;
