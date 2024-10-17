const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:-mx-4 sm:flex sm:flex-wrap md:py-4">
          <div className="mt-8 px-4 sm:mt-0 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="mb-6 text-xl font-bold">News</h5>
            <ul className="footer-links list-none">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Department News
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  University Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Research and innovation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Alumni Updates
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 px-4 sm:w-1/2 md:mt-0 md:w-1/4 xl:w-1/6">
            <h5 className="mb-6 text-xl font-bold">Campus Life</h5>
            <ul className="footer-links list-none">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Campus Tour
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Places to See
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Where to eat
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 px-4 sm:w-1/2 md:mt-0 md:w-1/4 xl:w-1/6">
            <h5 className="mb-6 text-xl font-bold">Computer Science</h5>
            <ul className="footer-links list-none">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Department Overview
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Research and Projects
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Tech Events and workshops
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-darkCyan hover:text-darkCyan"
                >
                  Student Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 px-4 sm:mx-auto sm:w-1/3 xl:ml-auto xl:mt-0 xl:w-1/6">
            <h5 className="mb-6 text-xl font-bold sm:text-center xl:text-left">
              ACU News
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href=""
                className="h-8 w-8 rounded-full border-2 border-gray-400 py-1 text-center text-gray-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href=""
                className="ml-2 h-8 w-8 rounded-full border-2 border-gray-400 py-1 text-center text-gray-600 hover:border-blue-400 hover:bg-blue-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href=""
                className="ml-2 h-8 w-8 rounded-full border-2 border-gray-400 py-1 text-center text-gray-600 hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
