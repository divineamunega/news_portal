import { Link } from "react-router-dom";

const NavLogo = ({ title }) => {
  return (
    <div className="hidden gap-5 sm:hidden md:flex">
      <div className="flex basis-2/5 items-center justify-center">
        <p className="font-montserrat text-3xl font-black italic">{title}</p>
      </div>
      <div className="relative h-28 basis-3/5">
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-1 bg-black bg-opacity-65 text-center text-white">
          <p className="">Best Blog and Magazine in ACU</p>
          <p>Experience the change</p>
          <Link to="/auth" className="border-2 px-2 py-1">
            Join Us Now
          </Link>
        </div>
        <img
          src="/logo_background.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default NavLogo;
