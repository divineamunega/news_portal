import { useEffect, useState } from "react";
import { FaComments, FaHeart, FaRegHeart } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { enqueueSnackbar } from "notistack";
import useIsLoggedIn from "../auth/useIsLoggedIn";
import { likeNews, unlikeNews } from "../../services/NewsService";

const Articles = ({ setUserId }) => {
  const data = useLoaderData();
  useIsLoggedIn("USER");
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    user?.id && isAuthenticated
      ? setUserId(user.id)
      : setUserId(".", { replace: true });
    user?.id && isAuthenticated
      ? navigate(`?userId=${user.id}`)
      : navigate(".", { replace: true });
  }, [setUserId, user, navigate, isAuthenticated]);

  const {
    err,
    id,
    content,
    description,
    newsImage,
    title,
    likes: noOfLikes,
    isLiked,
    likeId: apiLikeId,
  } = data;

  const responsiveImageUrl = newsImage.replace(
    "/upload/",
    "/upload/w_auto,f_auto,q_auto/",
  );

  const formattedContent = content.split("\n");
  const [liked, setLiked] = useState(isLiked);
  const [likes, setLikes] = useState(noOfLikes);
  const [likeId, setLikeId] = useState(apiLikeId);

  const handleClickLike = async function () {
    if (!isAuthenticated) {
      enqueueSnackbar({
        message: "Please log in to be able to like this article.",
        variant: "error",
      });

      return;
    }
    if (liked) {
      if (likeId === "") return;
      setLikes((likes) => likes - 1);
      setLiked(false);
      const data = await unlikeNews(likeId);
      if (data.status === "success") {
        setLikeId("");
        enqueueSnackbar({ message: "Unliked Succesfully", variant: "success" });
        return;
      }
    }

    if (!liked) {
      setLikes((likes) => likes + 1);
      setLiked(true);
      const data = await likeNews(id);
      if (data?.like.id) {
        setLikeId(data.like.id);
        enqueueSnackbar({ message: "Liked Succesfully", variant: "success" });
      }
      return;
    }
  };

  return (
    <main className="container mx-auto max-w-[50rem] px-6 py-12">
      {!err && (
        <article className="prose dark:prose-invert max-w-none">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={responsiveImageUrl}
              loading="lazy"
              alt={title + " image"}
              className="h-48 w-full object-cover sm:h-64 md:h-80 lg:h-96"
            />
          </div>
          <h1 className="mt-8 text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-lg text-gray-600">{description}</p>

          <div className="mt-8 space-y-4 text-lg">
            {formattedContent.map((text, id) => {
              return <p key={id}>{text}</p>;
            })}
          </div>

          {/* Likes and Comments */}
          <div className="mt-8 flex justify-between">
            <div className="flex items-center space-x-2">
              <button onClick={handleClickLike}>
                {liked ? (
                  <FaHeart size={30} color="red" />
                ) : (
                  <FaRegHeart size={30} />
                )}
              </button>
              <span>{likes} Likes</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaComments size={25} className="text-darkCyan" />
              <span>42</span>
            </div>
          </div>

          {/* Comments Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Comments</h2>
            <div className="mt-6 space-y-4">
              {[].map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))}
            </div>
            <AddCommentForm />
          </section>
        </article>
      )}

      {err && <div>{err}</div>}
    </main>
  );
};

export default Articles;

function AddCommentForm() {
  return (
    <form className="mt-8 space-y-4">
      <div className="grid gap-2">
        <label htmlFor="comment" className="text-sm font-medium">
          Comment
        </label>
        <textarea
          id="comment"
          rows="4"
          className="w-full rounded-md border p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Your comment"
        />
      </div>
      <button
        type="submit"
        className="border-1 hover:text-b rounded-md border-2 border-black bg-black px-4 py-2 text-white duration-500 hover:bg-white hover:text-black"
      >
        Submit
      </button>
    </form>
  );
}

// Icons & Avatar Component
function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21c-1.2-1.2-5-5.2-7-7C2 11.7 2 9.5 3.5 8 5 6.5 7.5 7 9 8s2.5 1.5 3 2 1.5 1.5 3 2 3.5 1.5 5 0 2-2 1-3c-1-1-5-5-7-7" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M8 15h8m0 0v4l-2-2m-6 2-2-2m2 0H4l-2-2" />
    </svg>
  );
}

function Comment({ name, time, comment }) {
  return (
    <div className="flex items-start space-x-4">
      <Avatar />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-bold">{name}</h4>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="mt-2 text-gray-700">{comment}</p>
      </div>
    </div>
  );
}
