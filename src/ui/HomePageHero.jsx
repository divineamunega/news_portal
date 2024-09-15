import { useCallback, useEffect, useRef, useState } from "react";
import useInViewport from "../hooks/useInViewport";
import React, { Suspense } from "react";

// Lazy load the Trends component
const Trends = React.lazy(() => import("./Trends"));

const headerStyle = "text-[1.1rem] font-black text-white xl:text-2xl";
const newsTypeStyle =
  "w-fit bg-darkCyan px-3 py-2 font-roboto text-[0.6rem] text-white md:text-[0.75rem] grid-box";
const gridStyle =
  "group absolute top-0 h-full w-[90%] lg:w-[100%] cursor-pointer overflow-hidden lg:static lg:top-auto lg:translate-x-0 duration-500";

const HomePageHero = () => {
  const ref = useRef([]);
  const [isInViewPort, viewPortRef] = useInViewport();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const counterRef = useRef(0);
  const duration = 10000;

  const pushRef = useCallback((el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    console.log(isInViewPort ? "IN VIEWPORT" : "NOT IN VIEWPORT");

    if (!isSmallScreen) {
      console.log("NOT SMALL SCREEN OR NOT IN VIEWPORT");

      ref.current.forEach((grid) => {
        if (grid) {
          grid.style.transform = "";
        }
      });

      return; // Exit the effect early if conditions are not met
    }

    ref.current.forEach((grid, i) => {
      if (grid) {
        grid.style.transform = `translateX(${i * 110}%)`;
      }
    });

    const interval = setInterval(() => {
      ref.current.forEach((grid, i) => {
        if (grid) {
          grid.style.transform = `translateX(${i * 110 - counterRef.current * 110}%)`;
        }
      });

      counterRef.current =
        counterRef.current === ref.current.length - 1
          ? 0
          : counterRef.current + 1;

      console.log("SWIPE");
    }, duration);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [ref, isSmallScreen, isInViewPort]);

  return (
    <div className="font-lora font-bold">
      <Suspense fallback={<div>Loading...</div>}>
        <Trends />
      </Suspense>

      <div
        className="no-scrollbar relative h-[14rem] gap-5 overflow-x-auto overflow-y-clip px-5 pt-5 md:h-[23rem] md:px-8 md:pt-5 lg:grid lg:h-auto lg:grid-cols-4 lg:grid-rows-2 lg:px-24"
        ref={viewPortRef}
      >
        <div className={`${gridStyle} lg:col-span-2`} ref={pushRef}>
          <div className="relative z-40 h-full w-full">
            <img
              src="/homepic.jpg"
              className="top-0 h-full w-full object-cover duration-500 group-hover:scale-110"
              alt="Ajayi Crowther University Celebrates 20 Years"
            />
            <div className="absolute top-0 flex h-full w-full bg-black/30 px-5 pb-5 duration-500 lg:group-hover:bg-black/60">
              <div className="mt-auto">
                <p className={newsTypeStyle}>NEWS</p>
                <h3 className={headerStyle}>
                  Ajayi Crowther University Celebrates 20 Years of Excellence
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={`${gridStyle} col-span-1`} ref={pushRef}>
          <div className="relative h-full w-full">
            <img
              src="/homepic3.jpg"
              className="absolute top-0 h-full w-full object-cover duration-500 group-hover:scale-110"
              alt="We eat good at ACU"
            />
            <div className="absolute top-0 flex h-full w-full bg-black/30 px-5 pb-5 duration-500 group-hover:bg-black/60">
              <div className="mt-auto">
                <p className={newsTypeStyle}>Campus Life</p>
                <h3 className={headerStyle}>We eat good at ACU</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={gridStyle} ref={pushRef}>
          <div className="relative h-full w-full">
            <img
              src="/homepic4.jpg"
              className="absolute top-0 h-full w-full object-cover duration-500 group-hover:scale-110"
              alt="Nature Walks and Study Spots"
            />
            <div className="absolute top-0 flex h-full w-full bg-black/30 px-5 pb-5 duration-500 group-hover:bg-black/60">
              <div className="mt-auto">
                <p className={newsTypeStyle}>Campus Life</p>
                <h3 className={headerStyle}>
                  Nature Walks and Study Spots: The Best Places to Relax on
                  Campus
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={`${gridStyle} col-span-2`} ref={pushRef}>
          <div className="relative h-full w-full">
            <img
              src="/homepic5.jpg"
              className="absolute top-0 h-full w-full object-cover duration-500 group-hover:scale-110"
              alt="Upcoming Seminar"
            />
            <div className="absolute top-0 flex h-full w-full bg-black/30 px-5 pb-5 duration-500 group-hover:bg-black/60">
              <div className="mt-auto">
                <p className={newsTypeStyle}>Events</p>
                <h3 className={headerStyle}>
                  Upcoming Seminar: The Future of Cybersecurity in a Digital
                  World
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={`${gridStyle} col-span-2`} ref={pushRef}>
          <div className="relative h-full w-full">
            <img
              src="/homepic6.jpg"
              className="absolute top-0 h-full w-full object-cover duration-500 group-hover:scale-110"
              alt="Blockchain Bootcamp"
            />
            <div className="absolute top-0 flex h-full w-full bg-black/30 px-5 pb-5 duration-500 group-hover:bg-black/60">
              <div className="mt-auto">
                <p className={newsTypeStyle}>Workshops</p>
                <h3 className={headerStyle}>Blockchain Bootcamp this Summer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
