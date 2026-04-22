"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/AnotherLandingPage/Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { dispatchType, RootStateType } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { storeBlogs } from "@/store/slices/allBlogs";
import { useRouter } from "next/navigation";
import PagePreloader from "@/utils/PagePreloader";
import gsap from "gsap";

interface Insight {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  href: string;
}

const insights: Insight[] = [
  {
    id: 1,
    title:
      "Why African teams are wired differently — and what that means for performance",
    category: "African Workplace · Behavioural Science",
    tags: ["afr", "beh"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    href: "/insights/1",
  },
  {
    id: 2,
    title:
      "The manager multiplier: why one person determines everything about team health",
    category: "Leadership · Team Performance",
    tags: ["lead", "perf"],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    href: "/insights/2",
  },
  {
    id: 3,
    title: "What psychological safety actually looks like in a Lagos office",
    category: "Behavioural Science",
    tags: ["beh", "afr"],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    href: "/insights/3",
  },
  {
    id: 4,
    title: "Why your onboarding is losing people by month four",
    category: "Team Performance",
    tags: ["perf"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    href: "/insights/4",
  },
  {
    id: 5,
    title:
      "Social Productivity explained — the concept, the evidence, the application",
    category: "Behavioural Science",
    tags: ["beh"],
    image:
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&q=80",
    href: "/insights/5",
  },
  {
    id: 6,
    title:
      "The difference between team bonding and team building — and why it matters",
    category: "African Workplace",
    tags: ["perf", "afr"],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    href: "/insights/6",
  },
];

const filters = [
  { id: "all", label: "All", value: "all" },
  // { id: "beh", label: "Behavioural Science", value: "beh" },
  // { id: "perf", label: "Team Performance", value: "perf" },
  // { id: "afr", label: "African Workplace", value: "afr" },
  // { id: "lead", label: "Leadership", value: "lead" },
];

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
export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredInsights, setFilteredInsights] = useState(insights);

  const blogs = useSelector((store: RootStateType) => {
    return store.blogsReducer;
  });
  const dispatch = useDispatch<dispatchType>();
  const { data, isLoading, isError } = useQuery({
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".rv").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredInsights(insights);
    } else {
      setFilteredInsights(
        insights.filter((insight) => insight.tags.includes(activeFilter)),
      );
    }
  }, [activeFilter]);

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[340px] sm:min-h-[360px] md:min-h-[380px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,15,0,0.88) 0%, rgba(26,15,0,0.55) 60%, rgba(102,0,0,0.2) 100%)",
          }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #660000 30%, #E8571A 70%, transparent)",
          }}
        />
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-25">
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div
              className="w-4 sm:w-5.5 h-px"
              style={{ backgroundColor: "rgba(255,248,238,0.2)" }}
            />
            <span
              className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[1.5px] sm:tracking-[2px] uppercase"
              style={{ color: "rgba(255,248,238,0.35)" }}
            >
              Resources · Insights
            </span>
          </div>
          <h1
            className="font-serif text-[clamp(28px,8vw,32px)] sm:text-[clamp(32px,6vw,42px)] md:text-[clamp(32px,4.5vw,56px)] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.06] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.2px] max-w-full sm:max-w-[90%] md:max-w-[680px] mb-4 sm:mb-5"
            style={{ color: "#FFF8EE" }}
          >
            Original thinking on
            <br />
            <em
              className="not-italic"
              style={{ color: "rgba(255,248,238,0.32)" }}
            >
              African team performance.
            </em>
          </h1>
          <p
            className="text-[13px] sm:text-[14px] md:text-base leading-[1.5] sm:leading-[1.6] md:leading-[1.68] font-light max-w-full sm:max-w-[90%] md:max-w-[520px]"
            style={{ color: "rgba(255,248,238,0.48)" }}
          >
            Not generic HR content. Perspectives grounded in real engagements
            and behavioural science.
          </p>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-[88px] px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Filters - Horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-2 mb-6 sm:mb-8 md:mb-10">
          <div className="flex gap-0.5 flex-nowrap sm:flex-wrap  border-[rgba(26,15,0,0.08)] dark:border-[rgba(255,248,238,0.08)] min-w-max sm:min-w-0">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-4 md:px-5.5 py-1.5 sm:py-2 md:py-2.5 text-[11px] sm:text-xs font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeFilter === filter.id
                    ? "text-red-600 border-red-600"
                    : "text-ink4 dark:text-[rgba(255,248,238,0.28)] border-transparent hover:text-red-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* handle loading state */}
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

        {isError && (
          <div>
            <p>sorry, unable to load blog</p>
          </div>
        )}
        {/* Insights Grid */}
        {blogs.length > 0 && (
          <div className="grid grid-cols-1 mdsm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...blogs]
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime(),
              )
              .map((insight) => (
                <Link
                  key={insight._id}
                  href={`/blog/${insight.title
                    .replace(/ /g, "-")
                    .toLocaleLowerCase()}---${insight._id}`}
                  className="border rounded overflow-hidden cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(26, 15, 0, 0.08)",
                  }}
                >
                  <div
                    className="h-[160px] sm:h-[170px] md:h-[180px] overflow-hidden relative"
                    style={{ backgroundColor: "#FFF2E0" }}
                  >
                    <img
                      src={insight.imageUrl}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-5.5">
                    <div className="text-[8px] sm:text-[9px] md:text-[9.5px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-1.5 sm:mb-2 text-terra">
                      {insight.date}
                    </div>
                    <h4 className="font-serif text-[14px] sm:text-[15px] md:text-base font-normal leading-[1.3] sm:leading-[1.35] tracking-[-0.1px] text-char">
                      {insight.title}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
