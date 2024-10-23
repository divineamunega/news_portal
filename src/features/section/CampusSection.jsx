import { Link } from "react-router-dom";
import ClipText from "../../ui/ClipText";

const CampusSection = ({ news }) => {
  const tourNews = news.filter(
    ({ subSection }) => subSection === "Campus Tour",
  );

  const liveNews = news.filter(
    ({ subSection }) => subSection === "Where to Live",
  );
  const eatNews = news.filter(
    ({ subSection }) => subSection === "Where to Eat",
  );

  const places = news.filter(
    ({ subSection }) => subSection === "Places to See",
  );
  const art = news.filter(({ subSection }) => subSection === "Art and Culture");

  return (
    <div className="mb-10 px-5 pr-10 pt-5 md:px-8 md:pt-5 lg:px-24">
      <SubSection news={tourNews} title="Campus Tour" id="tour" />

      <SubSection news={liveNews} title="Where to Live" id="live" />

      <SubSection news={eatNews} title="Where to Eat" id="eat" />

      <SubSection news={places} title="Places to Eat" id="places" />
      <SubSection news={art} title="Art and Culture" id="art" />
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
export default CampusSection;
