import { useCallback, useEffect, useRef, useState, Suspense } from "react";
import useInViewport from "../hooks/useInViewport";
import React from "react";

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

    if (!isSmallScreen) {
      ref.current.forEach((grid) => {
        if (grid) grid.style.transform = "";
      });
      return;
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
    }, duration);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [isSmallScreen, isInViewPort]);

  return (
    <div className="font-lora font-bold">
      <Suspense fallback={<div>Loading...</div>}>
        <Trends />
      </Suspense>

      <div
        className="no-scrollbar relative h-[14rem] gap-5 overflow-x-auto overflow-y-clip px-5 pt-5 md:h-[23rem] md:px-8 md:pt-5 lg:grid lg:h-auto lg:grid-cols-4 lg:grid-rows-2 lg:px-24"
        ref={viewPortRef}
      >
        {/* Article Grid */}
        {[
          {
            img: "/homepic.jpg",
            newsType: "NEWS",
            title:
              "Ajayi Crowther University Celebrates 20 Years of Excellence",
            alt: "ACU 20 Years",
          },
          {
            img: "/homepic3.jpg",
            newsType: "Campus Life",
            title: "We eat good at ACU",
            alt: "Campus Life at ACU",
          },
          {
            img: "/homepic4.jpg",
            newsType: "Campus Life",
            title: "Nature Walks and Study Spots on Campus",
            alt: "Nature Walks",
          },
          {
            img: "/homepic5.jpg",
            newsType: "Events",
            title: "Upcoming Seminar: The Future of Cybersecurity",
            alt: "Cybersecurity Seminar",
          },
          {
            img: "/homepic6.jpg",
            newsType: "Workshops",
            title: "Blockchain Bootcamp this Summer",
            alt: "Blockchain Bootcamp",
          },
        ].map(({ img, newsType, title, alt }, i) => (
          <div
            className={`${gridStyle} lg:col-span-${i === 0 ? 2 : 1}`}
            key={i}
            ref={pushRef}
          >
            <div className="relative z-40 h-full w-full">
              <img
                src={img}
                loading="lazy" // Lazy loading images
                className="h-full w-full object-cover duration-500 group-hover:scale-110"
                alt={alt}
              />
              <div className="absolute top-0 flex h-full w-full bg-black/30 px-5 pb-5 duration-500 lg:group-hover:bg-black/60">
                <div className="mt-auto">
                  <p className={newsTypeStyle}>{newsType}</p>
                  <h3 className={headerStyle}>{title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageHero;
