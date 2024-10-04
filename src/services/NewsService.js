import BASE_URL from "../ BASE_URL";

const URL = `${BASE_URL}news`;

const getNews = async function () {
  const res = await fetch(URL, { method: "GET", credentials: "include" });

  if (!res.ok) throw new Error("Unexpected Error Please try again.");

  const data = await res.json();
  return data;
};

const publishNews = async function (object) {
  const res = await fetch(`${URL}`, {
    method: "POST",
    credentials: "include",
    body: object,
  });
  const data = await res.json();
  return data;
};

const getNewsById = async function (id, userId) {
  const url = `${URL}/${id}${userId ? `?userId=${userId}` : ""}`;
  const res = await fetch(url);
  console.log(url);

  const data = await res.json();

  return data;
};

const likeNews = async function (newsId) {
  const res = await fetch(`${URL}/like/${newsId}`, {
    method: "POST",
    credentials: "include",
  });
  const data = await res.json();

  if (res.status !== 200) throw new Error("Could not like the post. Try again");

  return data;
};

const unlikeNews = async function (likeId) {
  const res = await fetch(`${URL}/unlike/${likeId}`, {
    method: "POST",
    credentials: "include",
  });

  if (res.status !== 200)
    throw new Error("Could not unlike this post. Try again");

  const data = await res.json();

  return data;
};

export { getNews, publishNews, getNewsById, likeNews, unlikeNews };
