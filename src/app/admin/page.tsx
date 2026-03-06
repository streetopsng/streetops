import Link from "next/link";

const Page = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen gap-6">
      <Link
        href="/admin/blog"
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Blogs
      </Link>

      <Link
        href="/admin/post-blog"
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Post Blog
      </Link>
    </div>
  );
};

export default Page;
