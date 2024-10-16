import { Link } from "react-router-dom";

const HomepageCampusLife = ({ news }) => {
  return (
    <div className="h-fit w-full px-5 pt-5 font-roboto md:px-8 md:pt-5 lg:mt-10 lg:px-24">
      <div className="relative right-0 mb-[10px] w-fit bg-darkCyan px-4 py-2 text-white">
        Campus Life
      </div>

      <div className="md:no-scrollbar no-scrollbar relative h-[15rem] w-full gap-5 overflow-x-auto">
        {news.map((news, i) => (
          <Link
            to={`/articles/${news.id}`}
            key={i}
            className={`absolute left-0 top-0 flex h-[13rem] w-[15rem] flex-col gap-2 shadow-lg`}
            style={{ transform: `translateX(${i * 110}%)` }}
          >
            <div className="h-4/6 w-full">
              <img
                src={news.newsImage}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-2/6 px-2 text-base font-bold">
              <p className="font-lora">{news.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomepageCampusLife;
// https://blhwzdvt-5173.uks1.devtunnels.ms/
