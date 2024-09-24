import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <main className="h-full w-full flex-1 overflow-y-scroll p-6">
      <h1 className="mb-6 text-3xl font-bold">News Articles</h1>

      <div className="grid gap-6">
        {data.length === 0 && (
          <div className="flex h-[70vh] flex-col items-center justify-center gap-3">
            <p className="font-roboto text-lg">
              You have not created any articles{" "}
            </p>
            <Link
              to="add-new-article"
              className="border-2 border-black bg-black px-4 py-3 text-white transition-colors duration-500 hover:bg-white hover:text-black"
            >
              Create One
            </Link>
          </div>
        )}

        {data.message && (
          <div className="flex h-[70vh] flex-col items-center justify-center gap-3">
            <p className="font-roboto text-lg">{data.message}</p>
            <Link
              to=""
              className="border-2 border-black bg-black px-4 py-3 text-white transition-colors duration-500 hover:bg-white hover:text-black"
            >
              Try Again
            </Link>
          </div>
        )}

        {data.length > 0 &&
          data.map((news) => (
            <div
              className="flex rounded-lg bg-white p-4 shadow-lg"
              key={news.id}
            >
              <img
                src={news.newsImage}
                alt="News Image"
                className="mr-4 h-24 w-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <Link className="text-xl font-semibold" to={`/news/${news.id}`}>
                  {news.title}
                </Link>
                <p className="text-sm text-gray-500">{news.description}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-gray-600">
                    <strong>Likes:</strong> 120
                  </span>
                  <span className="text-gray-600">
                    <strong>Comments:</strong> 45
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between">
                {news.isPublished ? (
                  <span className="rounded-2xl bg-green-300 px-2 py-1 text-sm text-green-950">
                    Published
                  </span>
                ) : (
                  <span className="font rounded-2xl bg-red-300 px-2 py-1 text-sm text-red-950">
                    Draft
                  </span>
                )}
                <a href="#" className="text-sm text-red-600">
                  Delete
                </a>
              </div>
            </div>
          ))}

        {/* <div className="flex rounded-lg bg-white p-4 shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="News Image"
                className="mr-4 h-24 w-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">News Title Here</h2>
                <p className="text-sm text-gray-500">
                  Short description of the news article goes here. It can be 1
                  or 2 sentences.
                </p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-gray-600">
                    <strong>Likes:</strong> 120
                  </span>
                  <span className="text-gray-600">
                    <strong>Comments:</strong> 45
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between">
                <span className="text-sm font-bold text-green-600">
                  Published
                </span>
                <a href="#" className="text-sm text-blue-600">
                  Edit
                </a>
              </div>
            </div>

            <div className="flex rounded-lg bg-white p-4 shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="News Image"
                className="mr-4 h-24 w-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Another News Title</h2>
                <p className="text-sm text-gray-500">
                  Here’s another short description of this news. Stay updated!
                </p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-gray-600">
                    <strong>Likes:</strong> 80
                  </span>
                  <span className="text-gray-600">
                    <strong>Comments:</strong> 22
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <span className="font rounded-2xl bg-red-300 px-2 py-1 text-sm text-red-950">
                  Draft
                </span>
                <a href="#" className="text-sm text-blue-600">
                  Edit
                </a>
              </div>
            </div> */}
      </div>
    </main>
  );
};

export default News;
