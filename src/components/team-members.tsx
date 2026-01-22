"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import _SplitText, { SplitText } from "gsap/SplitText";
import { motion, Variants } from "framer-motion";

gsap.registerPlugin(SplitText);

const data = [
  {
    id: 1,
    name: "Eden",
    img: "vectors/Eden-Okerezi.jpg",
  },
  {
    id: 2,
    name: "Amarachi",
    img: "vectors/Amarachi-Onyele.jpg",
  },
  {
    id: 3,
    name: "Paul",
    img: "vectors/Paul-Daruwana.jpg",
  },
  {
    id: 4,
    name: "Benita",
    img: "/vectors/Benita-Ukumi.jpg",
  },
  {
    id: 5,
    name: "Ekemini",
    img: "vectors/Ekemini-Udobong.jpg",
  },
  {
    id: 6,
    name: "Bolanle",
    img: "/vectors/Obabolanle-Obakoya.jpg",
  },
  {
    id: 7,
    name: "Henshaw",
    img: "/vectors/Henshaw-Bassey.jpg",
  },
  {
    id: 8,
    name: "Iyanu",
    img: "/vectors/Iyanuolu.jpg",
  },
  {
    id: 9,
    name: "Onyekachi",
    img: "/vectors/Onyekachi-Nwabeke.jpg",
  },
  {
    id: 10,
    name: "Tomilola",
    img: "/vectors/Tomilola.jpg",
  },
];

const TeamMembers = () => {
  const imageContainerRef = useRef<HTMLDivElement[] | []>([]);
  // const [currIndex,setCurrIndex] = useState<number>(data.length + 2)
  const [mouseLeave, setMouseLeave] = useState<boolean>(true);
  const [interValCount, setIntervalCount] = useState<number>(0);
  const [pageRendered, setPageRendered] = useState<boolean>(false);
  // const intervalCountRef = useRef<number>(0)
  const gsapCtx = useRef<gsap.Context | null>(null);
  const countRefs = useRef<HTMLHeadingElement[]>([]);
  //   const splitTextRefs = useRef<HTMLSpanElement[] | []>([]);
  const countryNameRefs = useRef<HTMLHeadElement[] | []>([]);
  const splitInstances = useRef<_SplitText[]>([]);

  useEffect(() => {
    //   splitInstances.current = new SplitText(".split-text",{type:"chars"})
    gsapCtx.current = gsap.context(() => {});

    return () => gsapCtx?.current?.revert();
  }, []);

  //   COMMENT THREE
  // gsap for image
  useEffect(() => {
    setPageRendered(true);
    gsapCtx.current?.add(() => {
      gsap.fromTo(
        imageContainerRef.current,
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          delay: 1,
          y: 0,
          duration: 2,
          stagger: {
            from: "random",
            amount: 0.5,
          },
        },
      );
    });

    return () => gsapCtx.current?.revert();
  }, []);

  // scale in hover

  const scaleOnHover = (index: number) => {
    // splitTextEffect()
    gsap.to(imageContainerRef.current[index], {
      scale: 1.3,
      duration: 0.2,
      ease: "power1.in",
      // overwrite: "auto",
    });
  };
  const scaleOutOnHover = (index: number) => {
    // removeSplitTextEffect()
    gsap.to(imageContainerRef.current[index], {
      scale: 1,
      duration: 0.7,
      overwrite: "auto",
    });
  };

  const translateY = (index: number) => {
    gsap.to(".counttry-name", {
      y: `-${index * 100}%`,
      opacity: 1,
      delay: -14,
    });

    // split;

    const splitText = SplitText.create(".split-text", {
      type: "chars",
    });
    gsap.from(splitText.chars, {
      autoAlpha: 1,
      yPercent: "random([-20,20])",
      // repeat:-1,
      // yoyo:true,
      ease: "power2.inOut",
      duration: "1",

      stagger: {
        amount: 0.5,
        from: "random",
      },
    });
  };

  // COMMENT ONE
  useEffect(() => {
    if (!mouseLeave) {
      return;
    }

    // console.log(interValCount);

    const interValId = setInterval(() => {
      if (interValCount === 2) {
        translateY(data.length);
        setMouseLeave(false);
        setIntervalCount(0);
      } else {
        setIntervalCount((prev) => prev + 1);
      }
      // console.log("what");
    }, 250);

    return () => clearInterval(interValId);
  }, [mouseLeave, interValCount]);

  const displayData = useMemo(
    () => [...data, { name: "vectors", id: data.length, img: "" }],
    [],
  );

  const dataArray = useMemo(() => [...data], []);

  useEffect(() => {
    const split = new SplitText(".team-members", {
      type: "chars",
      charsClass: "underline-text",
    });

    gsap.from(split.chars, {
      y: 100,
      duration: 2,
      autoAlpha: 0,
      stagger: {
        amount: 1,
        from: "start",
      },
    });
  }, []);

  // Motion

  const itemVariants: Variants = {
    hiddenLeft: {
      opacity: 0,
      x: -50,
    },
    hiddenRight: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
        delay: 0.2,
      },
    },
  };

  return (
    <div className="font-barlow py-8">
      <aside className="lg:hidden overflow-hidden">
        <div className="overflow-y-hidden my-8">
          <h1 className="team-members text-center text-secondPrimary  text-[2rem] font-black underline ">
            THE SQUAD
          </h1>
        </div>
        <section className="flex flex-wrap justify-center gap-x-2 gap-y-8  py-2">
          {data.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.name}
                className="flex flex-col justify-center items-center w-[48%]"
                variants={itemVariants}
                initial={isEven ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="grayscale transition-all duration-500 hover:grayscale-0 focus:grayscale-0 object-cover h-50 w-50 rounded-md"
                />

                <span className="font-barlow font-semibold uppercase text-md text-primary my-4">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </section>
      </aside>
      <aside className="lg:block hidden">
        <div className="overflow-y-hidden">
          <h1 className="team-members text-center text-secondPrimary  text-[6rem] font-black ">
            THE SQUAD
          </h1>
        </div>

        <section className="flex justify-between gap-x-4 overflow-hidden w-[60%] mx-auto py-8 px-4 ">
          {dataArray.map((item, index: number) => {
            return (
              <div
                key={index + 1}
                onMouseEnter={() => {
                  scaleOnHover(index);

                  setMouseLeave(false);

                  translateY(index);
                }}
                onMouseLeave={() => {
                  scaleOutOnHover(index);

                  // translateY(data.length)
                  setMouseLeave(true);
                }}
                // w-[100px] h-[100px] bg-[red]
                className="opacity-0  rounded-sm cursor-pointer"
                ref={(el: HTMLDivElement) => {
                  imageContainerRef.current[index] = el;
                }}
              >
                <img
                  className="prepareForAnimatioon w-20 h-20 object-cover bg-gray-200 rounded-sm grayscale hover:grayscale-0"
                  loading="lazy"
                  src={item.img}
                  alt={item.name}
                />
              </div>
            );
          })}
        </section>
        <div className="w-[90%] mx-auto text-center h-70  overflow-y-hidden">
          <aside className=" overflow-y-hidden ">
            {pageRendered &&
              displayData.map((item, index) => {
                return (
                  <h1
                    //  style={{
                    //     transform:`translateY(-${currIndex * 100}%)`
                    // }}
                    ref={(el) => {
                      countryNameRefs.current[index] = el as HTMLHeadElement;
                    }}
                    className={`counttry-name  uppercase font-barlow  transition-transform ease-in-out duration-500 text-center  flex flex-col items-center justify-center opacity-0 `}
                    key={index + 1}
                  >
                    <span
                      //   ref={(el) => {
                      //     splitTextRefs.current[index] = el as HTMLSpanElement;
                      //   }}
                      className={`split-text  text-[12rem] truncate font-black nowrap ${item.name == "vectors" ? "text-black" : "text-primary"} `}
                    >
                      {item.name}
                    </span>
                  </h1>
                );
              })}
          </aside>
        </div>
      </aside>
    </div>
  );
};

export default TeamMembers;
