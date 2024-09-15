import { Link } from "react-router-dom";
import ClipText from "./ClipText";

const HomePageNews = () => {
  return (
    <div className="mt-10 h-fit w-full px-5 pt-5 font-lora sm:mt-20 md:px-8 md:pt-5 lg:mt-40 lg:px-24">
      <div className="relative right-0 mb-[10px] w-fit bg-darkCyan px-4 py-2 text-white">
        News
      </div>

      <div className="grid h-[80rem] grid-cols-10 grid-rows-10 gap-5 sm:h-[80rem] md:h-[80rem] md:grid-cols-6 md:gap-5 lg:h-[45rem] lg:grid-rows-6">
        <div className="col-span-full row-span-3 flex flex-col shadow-md sm:col-span-full md:col-span-3 lg:col-span-2">
          <div className="h-1/2 w-full">
            <img
              src="/newspic1.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-50% w-full px-5 py-2">
            <Link
              to="/"
              className="transition-all duration-500 hover:text-darkCyan"
            >
              <h2 className="md:text-[1.3rem] lg:text-lg xl:text-2xl">
                Student Government Elections Approaching
              </h2>
            </Link>
            <div className="mt-2 flex gap-5 text-xs">
              <span>Divine Amunega</span>
              <span>Feb 01 2025</span>
            </div>
            <ClipText
              limit={100}
              className="mt-1 sm:text-xs md:text-[1rem] md:leading-7 lg:text-sm"
            >
              Campaign season is in full swing as ACU prepares for its annual
              student government elections. Meet the candidates and learn about
              their platforms before casting your vote.
            </ClipText>
          </div>
        </div>
        <div className="col-span-full row-span-3 flex flex-col shadow-md sm:col-span-full md:col-span-3 lg:col-span-2">
          <div className="h-1/2 w-full">
            <img
              src="/newspic2.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-50% w-full px-5 py-2">
            <Link
              to="/"
              className="transition-all duration-500 hover:text-darkCyan"
            >
              <h2 className="md:text-[1.3rem] lg:text-xl xl:text-2xl">
                New Research Center Opens at ACU
              </h2>
            </Link>
            <div className="mt-2 flex gap-5 text-xs">
              <span>Divine Amunega</span>
              <span>Feb 01 2025</span>
            </div>
            <ClipText
              limit={100}
              className="mt-1 sm:text-xs md:text-[1rem] md:leading-7 lg:text-sm"
            >
              Ajayi Crowther University inaugurates a state-of-the-art research
              center dedicated to advancing studies in AI, data science, and
              more. Explore what this means for students and faculty.
            </ClipText>
          </div>
        </div>

        <div className="row-span-2 hidden flex-col shadow-md lg:flex">
          <div className="h-4/6 w-full">
            <img
              src="https://picsum.photos/220/400"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-2/6 w-full px-2 py-2">
            <Link to="/" className="duration-500 hover:text-darkCyan">
              <p className="mt-auto font-roboto text-sm font-extrabold">
                New Course on Cybersecurity Launches
              </p>
            </Link>
          </div>
        </div>
        <div className="row-span-2 hidden shadow-md lg:block">
          <div className="h-4/6 w-full">
            <img
              src="/newspic3.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-2/6 w-full px-2 py-2">
            <Link to="/" className="duration-500 hover:text-darkCyan">
              <p className="mt-auto font-roboto text-sm font-extrabold">
                New Course on Cybersecurity Launches
              </p>
            </Link>
          </div>
        </div>
        <div className="row-span-2 hidden shadow-md lg:block">
          <div className="h-4/6 w-full">
            <img
              src="https://picsum.photos/250/400"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-2/6 w-full px-2 py-2">
            <Link to="/" className="duration-500 hover:text-darkCyan">
              <p className="mt-auto font-roboto text-sm font-extrabold">
                New Course on Cybersecurity Launches
              </p>
            </Link>
          </div>
        </div>
        <div className="row-span-2 hidden shadow-md lg:block">
          <div className="h-4/6 w-full">
            <img
              src="https://picsum.photos/240/400"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-2/6 w-full px-2 py-2">
            <Link to="/" className="duration-500 hover:text-darkCyan">
              <p className="mt-auto font-roboto text-sm font-extrabold">
                New Course on Cybersecurity Launches
              </p>
            </Link>
          </div>
        </div>
        <div className="col-span-full row-span-2 mb-2 flex flex-col gap-4 md:col-span-3 md:gap-4 lg:col-span-2">
          <div className="flex h-1/2 gap-5">
            <div className="h-full w-5/12 md:w-3/12">
              <img
                src="https://picsum.photos/210/400"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="flex h-full w-7/12 flex-col justify-center font-roboto md:w-9/12">
              <h2 className="text-base">
                Alumni Spotlight: Jane Doe’s Journey in Tech
              </h2>
              <p className="font-lora text-xs">19 October 2024</p>
            </div>
          </div>
          <div className="flex h-1/2 gap-5">
            <div className="h-full w-5/12 md:w-3/12">
              <img
                src="https://picsum.photos/210/410"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="flex h-full w-7/12 flex-col justify-center font-roboto">
              <h2 className="text-base">
                Alumni Spotlight: Jane Doe’s Journey in Tech
              </h2>
              <p className="font-lora text-xs">19 October 2024</p>
            </div>
          </div>
        </div>
        <div className="col-span-full row-span-2 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          <div className="flex h-1/2 gap-5">
            <div className="h-full w-5/12 md:w-3/12">
              <img
                src="https://picsum.photos/210/401"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="flex h-full w-7/12 flex-col justify-center font-roboto">
              <h2 className="text-base">
                Alumni Spotlight: Jane Doe’s Journey in Tech
              </h2>
              <p className="font-lora text-xs">19 October 2024</p>
            </div>
          </div>
          <div className="flex h-1/2 gap-5">
            <div className="h-full w-5/12 md:w-3/12">
              <img
                src="https://picsum.photos/210/402"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="flex h-full w-7/12 flex-col justify-center font-roboto">
              <h2 className="text-base">
                Alumni Spotlight: Jane Doe’s Journey in Tech
              </h2>
              <p className="font-lora text-xs">19 October 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageNews;
