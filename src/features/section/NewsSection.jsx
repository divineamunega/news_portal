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
      <SubSection
        news={departmentNews}
        title="Department News"
        id="department"
      />

      <SubSection
        news={universityEvents}
        title="University Events"
        id="events"
      />

      <SubSection
        news={research}
        title="Research And Innovation"
        id="research"
      />

      <SubSection news={alumni} title="Alumni Updates" id="alumni" />
    </div>
  );
};

const SubSection = function ({ news, title, id }) {
  return (
    <>
      <h2 className="mt-14 text-3xl font-extrabold" id={id}>
        {title}
      </h2>
      <div className="flex h-auto flex-wrap gap-5 px-5 pt-5 md:px-8 md:pt-5 lg:px-24">
        {news.map(({ id, title, newsImage, content }) => {
          const resizedImageUrl = `${newsImage.replace("/upload/", "/upload/w_300,h_200,c_fill/")}`;

          return (
            <Link
              to={`articles/${id}`}
              className="flex-[1_1_calc(100%-1rem)] overflow-hidden rounded shadow-lg md:flex-[1_1_calc(49%-1rem)] lg:flex-[1_1_calc(33.333%-1rem)]"
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
    </>
  );
};
export default NewsSection;
