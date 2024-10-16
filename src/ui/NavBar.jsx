import { IoMdArrowDropdown } from "react-icons/io";
import NavLogo from "./NavLogo";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const listStyle = `before:bg-darkCyan group relative flex items-center justify-center lg:px-4 lg:py-4 before:invisible before:absolute before:bottom-[5px] before:mx-[0px] before:my-[-5px] before:h-[3px] before:w-full before:scale-x-0 before:transition-all before:duration-[400ms] before:ease-in-out before:content-[''] hover:before:visible hover:before:scale-x-100 md:px-3 md:py-3`;

const title = "ACU CS NEWS";

const NavBar = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(0);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <nav className="flex w-full flex-col gap-6 px-0 pb-5 text-richBlack shadow-md md:px-8 md:pt-5 md:shadow-lg lg:px-24 lg:pt-5">
        <NavLogo title={title} />
        <div className="z-20 mt-auto hidden justify-between text-nowrap sm:hidden md:flex">
          <ul className="flex text-xs font-bold md:gap-1 md:text-sm lg:gap-8 lg:text-base">
            <li className={listStyle}>
              <NavLink to="/" className="flex items-center justify-center">
                Home
              </NavLink>
            </li>
            <li className={listStyle}>
              <button className="flex items-center justify-center">
                News
                <IoMdArrowDropdown className="-rotate-90 transition-all duration-300 group-hover:rotate-0" />
              </button>
              <div className="absolute left-[-10px] top-[100%] z-10 hidden text-nowrap bg-white px-4 py-6 text-left text-sm font-normal shadow-lg transition-all duration-300 group-hover:block">
                <ul className="flex flex-col gap-5">
                  <li className="">
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Department News
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      University Events
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Research and Innovation
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Alumni Updates
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={listStyle}>
              <button className="flex items-center justify-center">
                Campus Life
                <IoMdArrowDropdown className="-rotate-90 transition-all duration-300 group-hover:rotate-0" />
              </button>
              <div className="absolute left-[-10px] top-[100%] z-10 hidden text-nowrap bg-white px-4 py-6 text-left text-sm font-normal shadow-lg transition-all duration-300 group-hover:block">
                <ul className="flex flex-col gap-5">
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Campus Tour
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Where to Live
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Where to Eat
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Places to See
                    </Link>
                  </li>

                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Art and Culture
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={listStyle}>
              <button className="flex items-center justify-center">
                Computer Science
                <IoMdArrowDropdown className="-rotate-90 transition-all duration-300 group-hover:rotate-0" />
              </button>
              <div className="absolute left-[-10px] top-[100%] z-10 hidden text-nowrap bg-white px-4 py-6 text-left text-sm font-normal shadow-lg transition-all duration-300 group-hover:block">
                <ul className="flex flex-col gap-5">
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Department Overview
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Research & Projects
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Tech Events & Workshops
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                      Student Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={listStyle}>
              <NavLink to="/" className="flex items-center justify-center">
                Events
              </NavLink>
            </li>

            <li className={listStyle}>
              <NavLink to="/" className="flex items-center justify-center">
                About Us
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <input type="text" className="w-4/5" />
            <button className="text-xl">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="flex w-full justify-between px-6 pt-5 text-2xl md:hidden">
          <button
            onClick={() => {
              setIsSideBarOpen(true);
            }}
          >
            <GiHamburgerMenu />
          </button>

          <div>
            <h2 className="font-bold italic">{title}</h2>
          </div>

          <button>
            <FaSearch />
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 z-20 flex h-dvh flex-col overflow-y-auto overflow-x-hidden bg-white pt-10 transition-all duration-500 ${isSideBarOpen ? "w-dvw" : "w-0"}`}
      >
        <h2 className="text-center text-3xl font-extrabold italic">{title}</h2>
        <Link
          to="/auth"
          className="mx-auto mt-5 h-fit w-fit rounded-md bg-darkCyan px-8 py-3 text-antiFlashWhite"
        >
          Sign in
        </Link>

        <ul className="mt-8 flex flex-col gap-2 text-2xl font-bold">
          <li className="flex items-start px-4 py-2">
            <NavLink to="/" className="flex items-center justify-center">
              Home
            </NavLink>
          </li>
          <li className="flex flex-col items-start px-4 py-2">
            <button
              className="flex items-center justify-center"
              onClick={() => {
                setDropDownIsOpen((num) => {
                  return num !== 1 ? 1 : 0;
                });
              }}
            >
              News
              <IoMdArrowDropdown
                className={`transition-all duration-300 ${dropDownIsOpen === 1 ? "" : "-rotate-90"}`}
              />
            </button>
            <div
              className={`mt-2 max-h-0 w-full overflow-hidden text-nowrap px-0 py-0 text-left font-normal transition-all duration-500 ${dropDownIsOpen === 1 ? "max-h-fit px-4 py-8" : ""}`}
            >
              <ul className="flex flex-col items-center gap-5 text-xl">
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Department News
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    University Events
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Research and Innovation
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Alumni Updates
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="flex flex-col items-start px-4 py-2">
            <button
              className="flex items-center justify-center"
              onClick={() => {
                setDropDownIsOpen((num) => {
                  return num !== 2 ? 2 : 0;
                });
              }}
            >
              Campus Life
              <IoMdArrowDropdown
                className={`transition-all duration-300 ${dropDownIsOpen === 2 ? "" : "-rotate-90"}`}
              />
            </button>
            <div
              className={`mt-2 max-h-0 w-full overflow-hidden text-nowrap px-0 py-0 text-left font-normal transition-all duration-500 ${dropDownIsOpen === 2 ? "max-h-fit px-4 py-8" : ""}`}
            >
              <ul className="flex flex-col items-center gap-5 text-xl">
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Campus Tour
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Where to Live
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Where to Eat
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Places to See
                  </Link>
                </li>

                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Art and Culture
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="flex flex-col items-start px-4 py-2">
            <button
              className="flex items-center justify-center"
              onClick={() => {
                setDropDownIsOpen((num) => {
                  return num !== 3 ? 3 : 0;
                });
              }}
            >
              Computer Science
              <IoMdArrowDropdown
                className={`transition-all duration-300 ${dropDownIsOpen === 3 ? "" : "-rotate-90"}`}
              />
            </button>
            <div
              className={`mt-2 max-h-0 w-full overflow-hidden text-nowrap px-0 py-0 text-left font-normal transition-all duration-500 ${dropDownIsOpen === 3 ? "max-h-fit px-4 py-8" : ""}`}
            >
              <ul className="flex flex-col items-center gap-5 text-xl">
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Department Overview
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Research & Projects
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Tech Events & Workshops
                  </Link>
                </li>
                <li>
                  <Link className="px-4 py-2 transition-all duration-200 hover:bg-darkCyan/50">
                    Student Resources
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="flex items-start px-4 py-2">
            <NavLink to="/" className="flex items-center justify-center">
              Events
            </NavLink>
          </li>

          <li className="flex items-start px-4 py-2">
            <NavLink to="/" className="flex items-center justify-center">
              About Us
            </NavLink>
          </li>
        </ul>

        <button
          className="absolute right-5 text-3xl"
          onClick={() => {
            setIsSideBarOpen(false);
          }}
        >
          <FaXmark />
        </button>
      </div>
    </>
  );
};

export default NavBar;
