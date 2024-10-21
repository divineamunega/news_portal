import { Link } from "react-router-dom";
import ClipText from "../../ui/ClipText";

const NewsSection = ({ news }) => {
  const departmentNews = news.filter(
    ({ subSection }) => subSection === "Department News",
  );

  const universityEvents = news.filter(
    ({ subSection }) => subSection === "University Events",
  );
  const research = news.filter(
    ({ subSection }) => subSection === "Reasearch and Innovation",
  );

  const alumni = news.filter(
    ({ subSection }) => subSection === "Alumni Updates",
  );

  return (
    <div className="mb-10 px-5 pr-10 pt-5 md:px-8 md:pt-5 lg:px-24">
      <h2 className="text-3xl font-extrabold">Department News</h2>
      <div
        className="flex h-auto flex-wrap gap-5 px-5 pr-10 pt-5 md:px-8 md:pt-5 lg:px-24"
        id="department"
      >
        {departmentNews.map(({ id, title, newsImage, content }) => {
          const resizedImageUrl = `${newsImage.replace("/upload/", "/upload/w_300,h_200,c_fill/")}`;

          return (
            <Link
              to={`articles/${id}`}
              className="flex-[1_1_calc(33.333%-1rem)] overflow-hidden rounded shadow-lg"
              key={id}
            >
              <img className="w-full" src={resizedImageUrl} alt={title} />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>
                <p className="text-base text-gray-700">
                  <ClipText limit={100}>{content}</ClipText>
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <h2 className="mt-10 text-3xl font-extrabold">University Events</h2>
      <div
        className="flex h-auto flex-wrap gap-5 px-5 pr-10 pt-5 md:px-8 md:pt-5 lg:px-24"
        id="events"
      >
        {universityEvents.map(({ id, title, newsImage, content }) => {
          const resizedImageUrl = `${newsImage.replace("/upload/", "/upload/w_300,h_200,c_fill/")}`;

          return (
            <Link
              to={`articles/${id}`}
              className="flex-[1_1_calc(33.333%-1rem)] overflow-hidden rounded shadow-lg"
              key={id}
            >
              <img className="w-full" src={resizedImageUrl} alt={title} />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>
                <p className="text-base text-gray-700">
                  <ClipText limit={100}>{content}</ClipText>
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <h2 className="mt-10 text-3xl font-extrabold">Research and Innovation</h2>
      <div
        className="flex h-auto flex-wrap gap-5 px-5 pr-10 pt-5 md:px-8 md:pt-5 lg:px-24"
        id="research"
      >
        {research.map(({ id, title, newsImage, content }) => {
          const resizedImageUrl = `${newsImage.replace("/upload/", "/upload/w_300,h_200,c_fill/")}`;

          return (
            <Link
              to={`articles/${id}`}
              className="flex-[1_1_calc(33.333%-1rem)] overflow-hidden rounded shadow-lg"
              key={id}
            >
              <img className="w-full" src={resizedImageUrl} alt={title} />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>
                <p className="text-base text-gray-700">
                  <ClipText limit={100}>{content}</ClipText>
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <h2 className="mt-10 text-3xl font-extrabold">Alumni Updates</h2>
      <div
        className="flex h-auto flex-wrap gap-5 px-5 pr-10 pt-5 md:px-8 md:pt-5 lg:px-24"
        id="alumni"
      >
        {alumni.map(({ id, title, newsImage, content }) => {
          const resizedImageUrl = `${newsImage.replace("/upload/", "/upload/w_300,h_200,c_fill/")}`;

          return (
            <Link
              to={`articles/${id}`}
              className="flex-[1_1_calc(33.333%-1rem)] overflow-hidden rounded shadow-lg"
              key={id}
            >
              <img className="w-full" src={resizedImageUrl} alt={title} />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>
                <p className="text-base text-gray-700">
                  <ClipText limit={100}>{content}</ClipText>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewsSection;
