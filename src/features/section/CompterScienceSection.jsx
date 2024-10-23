import { Link } from "react-router-dom";
import ClipText from "../../ui/ClipText";

const ComputerScienceSection = ({ news }) => {
  const department = news.filter(
    ({ subSection }) => subSection === "Department Overview",
  );

  const research = news.filter(
    ({ subSection }) => subSection === "Research & Projects",
  );
  const techEvents = news.filter(
    ({ subSection }) => subSection === "Tech Events & Workshops",
  );

  const resources = news.filter(
    ({ subSection }) => subSection === "Student Resources",
  );

  return (
    <div className="mb-10 px-5 pr-10 pt-5 md:px-8 md:pt-5 lg:px-24">
      <SubSection
        news={department}
        title="Department Overview"
        id="department"
      />

      <SubSection news={research} title="Research and Projects" id="research" />

      <SubSection
        news={techEvents}
        title="Tech Events & Workshops"
        id="events"
      />

      <SubSection news={resources} title="Student Resources" id="student" />
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
              to={`/articles/${id}`}
              className="flex-[1_1_calc(100%-1rem)] overflow-hidden rounded shadow-lg md:flex-[1_1_calc(49%-1rem)] lg:flex-[1_1_calc(33.333%-1rem)]"
              key={id}
            >
              <img className="w-full" src={resizedImageUrl} alt={title} />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>

                <ClipText className="text-base text-gray-700" limit={100}>
                  {content}
                </ClipText>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default ComputerScienceSection;
