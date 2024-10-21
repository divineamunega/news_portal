import { useEffect, useState } from "react";
import NavBar from "../../ui/NavBar";
import Loader from "../../ui/Loader";
import Footer from "../../ui/Footer";
import { getNewsUnAuth } from "../../services/NewsService";
import date from "date-and-time";

const SectionPage = ({ Component, data }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const [news, setNews] = useState([]);

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
  }, [isSmallScreen]);

  useEffect(() => {
    const getNewsEffect = async function () {
      setIsLoading(true);
      const data = await getNewsUnAuth();

      const dataDate = data?.map((news) => {
        const createdate = date.format(
          new Date(news.createdAt),
          "DD-MM-YYYY HH:mm",
        );

        return {
          ...news,
          publishedAt: createdate + "",
        };
      });

      setNews(() => dataDate.filter(({ section }) => section === "News"));
      setIsLoading(false);
    };

    getNewsEffect();
  }, [setIsLoading]);

  if (isLoading) return <Loader />;
  return (
    <div>
      <NavBar />
      <div className="relative flex h-[25dvh] w-full items-center justify-center">
        <div
          className="absolute left-0 top-0 -z-10 h-full w-full"
          style={{
            background: "red url(../../public/homepic4.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(40%)",
          }}
        ></div>
        <h1 className="z-10 text-center text-5xl font-extrabold text-white">
          {data.section}
        </h1>
      </div>

      <Component isSmallScreen={isSmallScreen} news={news} />

      <Footer />
    </div>
  );
};

export default SectionPage;
