import { Link } from "react-router-dom";
import ClipText from "../ui/ClipText";
const HomePageComputerScience = ({ news }) => {
  return (
    <div className="mt-20 h-fit w-full px-5 pt-5 font-roboto md:px-8 md:pt-5 lg:mt-10 lg:px-24">
      <div className="relative right-0 mb-[10px] w-fit bg-darkCyan px-4 py-2 text-white">
        Comp. Science
      </div>

      <div className="flex h-[55rem] w-full flex-wrap gap-5 pb-10 sm:h-[70rem] md:h-[30rem] md:items-stretch md:justify-between lg:h-[30rem] lg:flex-nowrap lg:justify-center">
        {news
          ?.filter((data, i) => i === 0)
          ?.map(({ title, id, newsImage, publishedAt, content }) => (
            <div
              className="row flex basis-[100%] flex-col shadow-md sm:h-auto sm:basis-[100%] md:basis-[45%] lg:h-full lg:basis-1/3"
              key={id}
            >
              <div className="h-1/2 w-full">
                <img
                  src={newsImage}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex h-1/2 flex-col gap-2 px-5 py-5 lg:py-3">
                <Link
                  to={`/articles/${id}`}
                  className="font-lora transition-all duration-500 hover:text-darkCyan"
                >
                  <h2 className="cw text-[1rem] font-bold md:text-[1.3rem] lg:text-lg xl:text-2xl">
                    {title}
                  </h2>
                </Link>
                <div className="flex gap-2 text-sm">
                  <span className="font-extrabold">Author</span>
                  <span>{publishedAt}</span>
                </div>

                <ClipText
                  className="max-w-readable font-lora text-[0.9rem] md:text-base lg:text-xs"
                  limit={250}
                >
                  {content}
                </ClipText>
              </div>
            </div>
          ))}

        <div className="row-span-full flex h-[25rem] basis-[100%] flex-col gap-3 sm:h-[30rem] sm:basis-[100%] md:basis-[45%] lg:h-full lg:basis-1/3">
          {news?.slice(1, 5)?.map(({ id, newsImage, title, publishedAt }) => (
            <Link
              to={`/articles/${id}`}
              className="flex h-1/4 items-center md:shadow-md"
              key={id}
            >
              <div className="h-full w-1/3">
                <img
                  className="h-full w-full object-cover"
                  src={newsImage}
                  alt={title}
                />
              </div>
              <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
                <p>{title}</p>
                <p className="text-sm text-richBlack/60">{publishedAt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row-span-full hidden flex-col gap-3 sm:hidden sm:basis-[100%] md:basis-[45%] lg:flex lg:basis-1/3">
          {news?.slice(5, 9)?.map(({ id, newsImage, title, publishedAt }) => (
            <Link
              to={`/articles/${id}`}
              className="flex h-1/4 items-center md:shadow-md"
              key={id}
            >
              <div className="h-full w-1/3">
                <img
                  className="h-full w-full object-cover"
                  src={newsImage}
                  alt={title}
                />
              </div>
              <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
                <p>{title}</p>
                <p className="text-sm text-richBlack/60">{publishedAt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageComputerScience;
