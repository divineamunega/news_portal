import { Link } from "react-router-dom";
import ClipText from "./ClipText";

const HomePageNews = ({ news }) => {
  return (
    <div className="mt-10 h-fit w-full px-5 pt-5 font-lora sm:mt-20 md:px-8 md:pt-5 lg:mt-40 lg:px-24">
      <div className="relative right-0 mb-[10px] w-fit bg-darkCyan px-4 py-2 text-white">
        News
      </div>

      <div className="grid h-[80rem] grid-cols-10 grid-rows-10 gap-5 sm:h-[80rem] md:h-[80rem] md:grid-cols-6 md:gap-5 lg:h-[45rem] lg:grid-rows-6">
        {news
          ?.slice(0, 2)
          ?.map(({ id, newsImage, title, publishedAt, content }) => (
            <div
              key={id}
              className="col-span-full row-span-3 flex flex-col shadow-md sm:col-span-full md:col-span-3 lg:col-span-2"
            >
              <div className="h-1/2 w-full">
                <img
                  src={newsImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-50% w-full px-5 py-2">
                <Link
                  to={`/articles/${id}`}
                  className="transition-all duration-500 hover:text-darkCyan"
                >
                  <h2 className="md:text-[1.3rem] lg:text-xl xl:text-2xl">
                    {title}
                  </h2>
                </Link>
                <div className="mt-2 flex gap-5 text-xs">
                  <span>{publishedAt}</span>
                </div>
                <ClipText
                  limit={100}
                  className="mt-1 sm:text-xs md:text-[1rem] md:leading-7 lg:text-sm"
                >
                  {content}
                </ClipText>
              </div>
            </div>
          ))}

        {news?.slice(3, 7)?.map(({ id, newsImage, title }) => (
          <div className="row-span-2 hidden shadow-md lg:block" key={id}>
            <div className="h-4/6 w-full">
              <img
                src={newsImage}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-2/6 w-full px-2 py-2">
              <Link
                to={`/articles/${id}`}
                className="duration-500 hover:text-darkCyan"
              >
                <p className="mt-auto font-roboto text-sm font-extrabold">
                  {title}
                </p>
              </Link>
            </div>
          </div>
        ))}

        <div className="col-span-full row-span-2 mb-2 flex flex-col gap-4 md:col-span-3 md:gap-4 lg:col-span-2">
          {news?.slice(8, 10)?.map(({ id, newsImage, title, publishedAt }) => (
            <div className="flex h-1/2 gap-5" key={id}>
              <div className="h-full w-5/12 md:w-3/12">
                <img
                  src={newsImage}
                  className="h-full w-full object-cover"
                  alt={title}
                />
              </div>
              <div className="flex h-full w-7/12 flex-col justify-center font-roboto md:w-9/12">
                <Link className="text-base" to={`/articles/${id}`}>
                  {title}
                </Link>
                <p className="font-lora text-xs">{publishedAt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-full row-span-2 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          {news?.slice(11, 12)?.map(({ id, newsImage, title, publishedAt }) => (
            <div className="flex h-1/2 gap-5" key={id}>
              <div className="h-full w-5/12 md:w-3/12">
                <img
                  src={newsImage}
                  className="h-full w-full object-cover"
                  alt={title}
                />
              </div>
              <div className="flex h-full w-7/12 flex-col justify-center font-roboto md:w-9/12">
                <Link className="text-base" to={`/articles/${id}`}>
                  {title}
                </Link>
                <p className="font-lora text-xs">{publishedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageNews;
