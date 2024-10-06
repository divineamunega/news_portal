import { useState } from "react";
import { FaComments, FaHeart, FaRegHeart } from "react-icons/fa6";
import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { enqueueSnackbar } from "notistack";
import useIsLoggedIn from "../auth/useIsLoggedIn";
import { likeNews, unlikeNews } from "../../services/NewsService";
import date from "date-and-time";

const Articles = () => {
  const data = useLoaderData();
  useIsLoggedIn("USER");
  const { isAuthenticated } = useAuth();

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
    comments,
  } = data;

  const responsiveImageUrl =
    err || newsImage.replace("/upload/", "/upload/w_auto,f_auto,q_auto/");

  const formattedContent = err || content.split("\n");
  const [liked, setLiked] = useState(isLiked);
  const [likes, setLikes] = useState(noOfLikes);
  const [likeId, setLikeId] = useState(apiLikeId);

  const commentErr = useActionData()?.err;

  if (err)
    return (
      <div>
        {err}
        <p>
          <Link to="." className="text-blue-600">
            Try again
          </Link>
        </p>
      </div>
    );
  if (commentErr) {
    console.log(commentErr);
    enqueueSnackbar({
      variant: "error",
      message: commentErr,
      preventDuplicate: true,
    });
  }
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

  console.log("errorr", err);

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
              <span>{comments.length}</span>
            </div>
          </div>

          {/* Comments Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Comments</h2>
            <div className="mt-6 space-y-4">
              {comments?.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))}
            </div>
            {isAuthenticated ? (
              <AddCommentForm />
            ) : (
              <div className="flex w-full flex-col items-center justify-center pt-10">
                Please Log in to add comments
                <Link to="/auth" className="text-blue-600">
                  Login
                </Link>
              </div>
            )}
          </section>
        </article>
      )}
    </main>
  );
};

export default Articles;

function AddCommentForm() {
  return (
    <Form className="mt-8 space-y-4" method="POST">
      <div className="grid gap-2">
        <label htmlFor="comment" className="text-sm font-medium">
          Comment
        </label>
        <textarea
          id="comment"
          name="content"
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
    </Form>
  );
}

function Comment({ name, createdAt, content }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-bold">{name}</h4>
          <span className="text-xs text-gray-500">
            {date.format(new Date(createdAt), "YYYY/MM/DD HH:mm:ss")}
          </span>
        </div>
        <p className="mt-2 text-gray-700">{content}</p>
      </div>
    </div>
  );
}
