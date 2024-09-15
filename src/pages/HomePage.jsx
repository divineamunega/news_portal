import HomepageCampusLife from "../ui/HomepageCampusLife";
import HomePageComputerScience from "../ui/HomePageComputerScience";
import HomePageHero from "../ui/HomePageHero";
import HomePageNews from "../ui/HomePageNews";
import NavBar from "../ui/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomePageHero />
      <HomePageNews />
      <HomePageComputerScience />
      <HomepageCampusLife />
      <HomePageNews />
      <HomePageComputerScience />
    </div>
  );
};

export default HomePage;
