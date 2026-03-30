"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    image:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774479682/first-image_zfecof.png",
    eyebrow: "Social Productivity and Social Health Index ",
    title: "Performance is social.",
    description:
      "How a team relates to one another is how well they produce together. We call this Social Productivity. We measure it through the Social Health Index.",
    cta1: { text: "Start With a Diagnosis →", href: "#" },
    cta2: { text: "Our Story", href: "/about" },
  },
  {
    image:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774479683/second-image_javp8k.png",
    eyebrow: "Africa-First Context",
    title: "Built for here.",
    description:
      "African teams are relational, high-context, and communal. StreetOps was built around that. Not adapted to it.",
    cta1: { text: "How We Work →", href: "#" },
    cta2: { text: "Talk to Us", href: "/contact" },
  },
  {
    image:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774479681/third-image_ydd15b.png",
    eyebrow: "Training and Development",
    title: "Programmes built for your team.",
    description:
      "We design and deliver training that fits what your team actually needs. Practical, grounded, and built to stick.",
    cta1: { text: "Explore Training →", href: "#" },
    cta2: { text: "Talk to Us", href: "/contact" },
  },
  {
    image:
      "https://res.cloudinary.com/deylyllwd/image/upload/v1774479719/fourth-image_zjqtnd.png",
    eyebrow: "Research and Industry Reports",
    title: "We study African teams.",
    description:
      "Our research programme looks at how African teams bond, perform, and break down. We publish what we find.",
    cta1: { text: "See Our Research →", href: "#" },
    cta2: { text: "Talk to Us", href: "/contact" },
  },
];

const AnotherHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const setSlide = (index: number) => {
    setCurrentSlide(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5500);
    }
  };

  return (
    <section className="relative h-[calc(100vh-60px)] min-h-[500px] sm:min-h-[550px] md:min-h-[620px] overflow-hidden flex flex-col">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}

      {/* Overlays */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(105deg, rgba(26,15,0,0.85) 0%, rgba(26,15,0,0.55) 55%, rgba(102,0,0,0.25) 100%), linear-gradient(to top, rgba(26,15,0,0.75) 0%, transparent 45%)",
        }}
      />
      <div
        className="absolute left-0 top-0 bottom-0 w-1 z-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #660000 30%, #E8571A 70%, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-0.5 z-30 animate-hprog"
        style={{ backgroundColor: "#660000" }}
      />

      {/* Content */}
      <div className="relative z-30 flex-1 flex items-center px-4 sm:px-6 md:px-10 lg:px-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`max-w-full sm:max-w-[90%] md:max-w-[660px] ${index === currentSlide ? "block animate-fadeUp" : "hidden"}`}
          >
            <div className="flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 md:mb-6">
              <div
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full"
                style={{ backgroundColor: "#F5B800" }}
              />
              <div
                className="w-4 sm:w-6.5 h-px"
                style={{ backgroundColor: "rgba(255,248,238,0.2)" }}
              />
              <span
                className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] uppercase"
                style={{ color: "rgba(255,248,238,0.4)" }}
              >
                {slide.eyebrow}
              </span>
            </div>
            <h1
              className="font-serif text-[clamp(28px,8vw,38px)] sm:text-[clamp(32px,6vw,48px)] md:text-[clamp(38px,4.8vw,62px)] font-light leading-[1.2] sm:leading-[1.1] md:leading-[1.06] tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] mb-3 sm:mb-4 md:mb-5.5 whitespace-pre-line"
              style={{ color: "#FFF8EE" }}
            >
              {slide.title}
            </h1>
            <p
              className="text-[13px] sm:text-[14px] md:text-[16.5px] leading-[1.5] sm:leading-[1.6] md:leading-[1.72] mb-6 sm:mb-7 md:mb-9.5 max-w-full sm:max-w-[90%] md:max-w-[500px] font-light"
              style={{ color: "rgba(255,248,238,0.52)" }}
            >
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <Link
                href={slide.cta1.href}
                className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-[12px] sm:text-[12.5px] md:text-[13px] font-semibold rounded transition-all inline-flex items-center justify-center gap-1.5"
                style={{ backgroundColor: "#660000", color: "#FFFFFF" }}
              >
                {slide.cta1.text}
              </Link>
              <Link
                href={slide.cta2.href}
                className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-[12px] sm:text-[12.5px] md:text-[13px] font-medium rounded transition-all border inline-flex items-center justify-center gap-1.5"
                style={{
                  backgroundColor: "transparent",
                  color: "rgba(255,248,238,0.6)",
                  borderColor: "rgba(255,248,238,0.2)",
                }}
              >
                {slide.cta2.text}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Stats - Hidden on mobile, visible on tablet+ */}
      {/* <div className="hidden md:flex relative z-30 px-4 sm:px-6 md:px-10 lg:px-20 gap-0">
        {[
          { number: "40", suffix: "+", label: "Organisations served" },
          { number: "6", suffix: "+", label: "Industries covered" },
          { number: "500", suffix: "+", label: "Employees reached" },
          { number: "5", suffix: "", label: "Service lines" },
        ].map((stat, index) => (
          <div
            key={index}
            className="pr-6 md:pr-9 mr-6 md:mr-9 border-r last:border-r-0"
            style={{ borderRightColor: "rgba(255,248,238,0.1)" }}
          >
            <div
              className="font-serif text-[24px] sm:text-[28px] md:text-[30px] font-[200] leading-none flex items-baseline gap-0.5"
              style={{ color: "#FFF8EE" }}
            >
              {stat.number}
              <span
                style={{ color: "#F5B800", fontSize: "14px", fontWeight: 500 }}
              >
                {stat.suffix}
              </span>
            </div>
            <div
              className="text-[10px] sm:text-[11px] mt-1"
              style={{ color: "rgba(255,248,238,0.35)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div> */}

      {/* Bottom Controls */}
      <div
        className="relative z-30 px-4 sm:px-6 md:px-10 lg:px-20 py-3 sm:py-4 md:py-5 flex items-center justify-between border-t mt-3.5"
        style={{ borderTopColor: "rgba(255,248,238,0.07)" }}
      >
        <div className="flex gap-1.5 sm:gap-2 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`transition-all ${
                index === currentSlide ? "w-4 sm:w-6.5 rounded" : "w-1 sm:w-1.5"
              } h-1 sm:h-1.5 rounded-full`}
              style={{
                backgroundColor:
                  index === currentSlide ? "#F5B800" : "rgba(255,248,238,0.2)",
              }}
            />
          ))}
        </div>

        {/* Scroll hint - hidden on very small screens */}
        <div className="hidden sm:flex items-center gap-2">
          <div
            className="relative w-6 sm:w-9 h-px overflow-hidden"
            style={{ backgroundColor: "rgba(255,248,238,0.1)" }}
          >
            <div className="shbar-animate absolute top-0 left-[-100%] w-full h-full" />
          </div>
          <span
            className="text-[8px] sm:text-[9.5px] tracking-[1.5px] sm:tracking-[2.5px] uppercase font-medium"
            style={{ color: "rgba(255,248,238,0.2)" }}
          >
            Scroll to explore
          </span>
        </div>

        <div
          className="flex items-center gap-1.5 sm:gap-2.5 font-serif text-[10px] sm:text-xs italic"
          style={{ color: "rgba(255,248,238,0.2)" }}
        >
          <span>{String(currentSlide + 1).padStart(2, "0")}</span>
          <div
            className="w-px h-4 sm:h-6.5"
            style={{ backgroundColor: "rgba(255,248,238,0.1)" }}
          />
          <span>04</span>
        </div>
      </div>
    </section>
  );
};

export default AnotherHero;
