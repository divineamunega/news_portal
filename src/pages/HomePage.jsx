import { useEffect, useState } from "react";
import HomepageCampusLife from "../ui/HomepageCampusLife";
import HomePageComputerScience from "../ui/HomePageComputerScience";
import HomePageHero from "../ui/HomePageHero";
import HomePageNews from "../ui/HomePageNews";
import NavBar from "../ui/NavBar";
import { getMainNews } from "../services/NewsService";

const HomePage = () => {
  const [homeNews, setHomeNews] = useState([]);
  useEffect(() => {
    const setNewsPage = async () => {
      try {
        setHomeNews(await getMainNews());
      } catch (err) {
        setHomeNews([]);
      }
    };

    console.log(homeNews);
    setNewsPage();
  }, []);

  return (
    <div>
      <NavBar />

      <HomePageHero news={homeNews} />

      <HomePageNews />
      <HomePageComputerScience />
      <HomepageCampusLife />
      <HomePageNews />
      <HomePageComputerScience />
    </div>
  );
};

export default HomePage;
