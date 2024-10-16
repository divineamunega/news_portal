import { useEffect, useRef, useState } from "react";
import HomepageCampusLife from "../ui/HomepageCampusLife";
import HomePageComputerScience from "../ui/HomePageComputerScience";
import HomePageHero from "../ui/HomePageHero";
import HomePageNews from "../ui/HomePageNews";
import NavBar from "../ui/NavBar";
import { getMainNews, getNewsUnAuth as getNews } from "../services/NewsService";
import Loader from "../ui/Loader";
import Footer from "../ui/Footer";

const HomePage = () => {
  const [homeNews, setHomeNews] = useState([]);
  const [news, setNews] = useState([]);
  const [computerScience, setComputerScience] = useState([]);
  const [campusLife, setCampusLife] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFetched = useRef(false);
  useEffect(() => {
    const setNewsPage = async () => {
      try {
        if (isFetched.current === false) {
          setIsLoading(true);
          setHomeNews(await getMainNews());

          const data = await getNews();
          console.log(data);

          setNews(() => data.filter(({ section }) => section === "News"));
          setComputerScience(() =>
            data.filter(({ section }) => section === "Computer Science"),
          );

          setCampusLife(() =>
            data.filter(({ section }) => section === "Campus Life"),
          );

          isFetched.current = true;
        }
      } catch (err) {
        console.log(err);
        setHomeNews([]);
        isFetched.current = false;
      } finally {
        setIsLoading(false);
      }
    };
    setNewsPage();
  }, [homeNews]);

  if (isLoading) return <Loader />;
  return (
    <div>
      <NavBar />

      <HomePageHero news={homeNews} />

      <HomePageNews news={news} />
      <HomePageComputerScience news={computerScience} />
      <HomepageCampusLife news={campusLife} />
      <Footer />
    </div>
  );
};

export default HomePage;
