import { Link } from "react-router-dom";

const HomePageComputerScience = () => {
  return (
    <div className="mt-20 h-fit w-full px-5 pt-5 font-roboto md:px-8 md:pt-5 lg:mt-10 lg:px-24">
      <div className="relative right-0 mb-[10px] w-fit bg-darkCyan px-4 py-2 text-white">
        Comp. Science
      </div>

      <div className="flex h-[55rem] w-full flex-wrap gap-5 pb-10 sm:h-[70rem] md:h-[30rem] md:items-stretch md:justify-between lg:h-[30rem] lg:flex-nowrap lg:justify-center">
        <div className="row flex basis-[100%] flex-col shadow-md sm:h-auto sm:basis-[100%] md:basis-[45%] lg:h-full lg:basis-1/3">
          <div className="h-1/2 w-full">
            <img
              src="https://picsum.photos/600/102"
              alt="Image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex h-1/2 flex-col gap-2 px-5 py-5 lg:py-3">
            <Link
              to="/"
              className="font-lora transition-all duration-500 hover:text-darkCyan"
            >
              <h2 className="cw text-[1rem] font-bold md:text-[1.3rem] lg:text-lg xl:text-2xl">
                ACU Students Develop Innovative App for Campus Navigation
              </h2>
            </Link>
            <div className="flex gap-2 text-sm">
              <span className="font-extrabold">Divine Amunega</span>
              <span>Apr. 12 2017</span>
            </div>
            <p className="max-w-readable font-lora text-[0.9rem] md:text-base lg:text-xs">
              A team of Computer Science students at ACU creates a
              groundbreaking app to help students find their way around campus.
            </p>
          </div>
        </div>
        <div className="row-span-full flex h-[25rem] basis-[100%] flex-col gap-3 sm:h-[30rem] sm:basis-[100%] md:basis-[45%] lg:h-full lg:basis-1/3">
          <div className="flex h-1/4 items-center md:shadow-md">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://picsum.photos/2000/200"
                alt="picture"
              />
            </div>
            <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
              <p>ACU Computer Science Students Intern at Top Tech Firms</p>
              <p className="text-sm text-richBlack/60">Apr. 17 2025</p>
            </div>
          </div>
          <div className="flex h-1/4 items-center md:shadow-md">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://picsum.photos/2000/200"
                alt="picture"
              />
            </div>
            <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
              <p>ACU Computer Science Students Intern at Top Tech Firms</p>
              <p className="text-sm text-richBlack/60">Apr. 17 2025</p>
            </div>
          </div>
          <div className="flex h-1/4 items-center md:shadow-md">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://picsum.photos/2000/200"
                alt="picture"
              />
            </div>
            <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
              <p>ACU Computer Science Students Intern at Top Tech Firms</p>
              <p className="text-sm text-richBlack/60">Apr. 17 2025</p>
            </div>
          </div>
          <div className="flex h-1/4 items-center md:shadow-md">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://picsum.photos/2000/200"
                alt="picture"
              />
            </div>
            <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
              <p>ACU Computer Science Students Intern at Top Tech Firms</p>
              <p className="text-sm text-richBlack/60">Apr. 17 2025</p>
            </div>
          </div>
        </div>
        <div className="row-span-full hidden flex-col gap-3 sm:hidden sm:basis-[100%] md:basis-[45%] lg:flex lg:basis-1/3">
          <div className="flex h-1/4 items-center md:shadow-md">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://picsum.photos/2000/200"
                alt="picture"
              />
            </div>
            <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
              <p>ACU Computer Science Students Intern at Top Tech Firms</p>
              <p className="text-sm text-richBlack/60">Apr. 17 2025</p>
            </div>
          </div>
          <div className="flex h-1/4 items-center md:shadow-md">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://picsum.photos/2000/200"
                alt="picture"
              />
            </div>
            <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
              <p>ACU Computer Science Students Intern at Top Tech Firms</p>
              <p className="text-sm text-richBlack/60">Apr. 17 2025</p>
            </div>
          </div>
          <div className="flex h-1/4 items-center md:shadow-md">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://picsum.photos/2000/200"
                alt="picture"
              />
            </div>
            <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
              <p>ACU Computer Science Students Intern at Top Tech Firms</p>
              <p className="text-sm text-richBlack/60">Apr. 17 2025</p>
            </div>
          </div>
          <div className="flex h-1/4 items-center md:shadow-md">
            <div className="h-full w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://picsum.photos/2000/200"
                alt="picture"
              />
            </div>
            <div className="flex h-full w-3/4 flex-col gap-2 px-2 py-2 font-lora text-[0.9rem] md:text-base lg:justify-between lg:text-sm">
              <p>ACU Computer Science Students Intern at Top Tech Firms</p>
              <p className="text-sm text-richBlack/60">Apr. 17 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComputerScience;
