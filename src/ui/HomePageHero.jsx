import { useEffect, useState } from "react";
import useInViewport from "../hooks/useInViewport";
import { lazy } from "react";
// Lazy load the Trends component
const Trends = lazy(() => import("./Trends"));

const headerStyle = "text-[1.1rem] font-black text-white xl:text-2xl";
const newsTypeStyle =
  "w-fit bg-darkCyan px-3 py-2 font-roboto text-[0.6rem] text-white md:text-[0.75rem] grid-box";
const gridStyle =
  "group absolute top-0 h-full w-[90%] lg:w-[100%] cursor-pointer overflow-hidden lg:static lg:top-auto lg:translate-x-0 duration-500";

const HomePageHero = ({ news }) => {
  const [isInViewPort, viewPortRef] = useInViewport();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    if (!isSmallScreen) {
      console.log("NOT SMALL SCREEN OR NOT IN VIEWPORT");
      return; // Exit the effect early if conditions are not met
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen, isInViewPort]);

  return (
    <div className="font-lora font-bold">
      <Trends />

      <div
        className="no-scrollbar relative mr-5 h-[14rem] gap-5 overflow-x-auto overflow-y-clip px-5 pr-10 pt-5 md:h-[23rem] md:px-8 md:pt-5 lg:grid lg:h-auto lg:grid-cols-4 lg:grid-rows-2 lg:px-24"
        ref={viewPortRef}
      >
        {news.map(({ _id, title, newsImage, section }, i) => (
          <a
            className={`${gridStyle} lg:col-span-2`}
            key={_id}
            href={`/articles/${_id}`}
            style={{
              transform: `${isSmallScreen ? `translateX(${i * 110}%)` : "translateX(0%)"}`,
            }}
          >
            <div className="relative z-40 h-full w-full">
              <img
                loading="lazy"
                src={newsImage}
                className="top-0 h-[350px] w-full object-cover duration-500 group-hover:scale-110"
                alt={title}
              />
              <div className="absolute top-0 flex h-full w-full bg-black/30 px-5 pb-5 duration-500 lg:group-hover:bg-black/60">
                <div className="mt-auto">
                  <p className={newsTypeStyle}>{section}</p>
                  <h3 className={headerStyle}>{title}</h3>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePageHero;
