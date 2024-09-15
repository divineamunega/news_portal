import React from "react";
import TextTransition, { presets } from "react-text-transition";

const trendingNews = [
  "School Wins National Award for Innovative Teaching Methods",
  "New Science Lab Unveiled at Local High School",
  "Students Launch Community Service Initiative to Support Local Homeless Shelter",
  "School Principal Announced as Keynote Speaker at Education Conference",
  "High School Robotics Team Qualifies for International Competition",
  "Local School Implements New Mental Health Program for Students",
  "School Celebrates Record-Breaking Year for College Acceptances",
  "Fundraiser Success: School Raises $50,000 for New Library Renovation",
  "Students Organize Climate Change Awareness Week",
  "Teacher Receives Statewide Recognition for Excellence in Education",
];

const TextSlider = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="flex text-[0.7rem] md:text-base">
      <TextTransition
        springConfig={presets.wobbly}
        className="flex items-center [&_div]:text-nowrap"
      >
        {trendingNews[index % trendingNews.length]}
      </TextTransition>
    </h1>
  );
};

export default TextSlider;
