import BASE_URL from "../ BASE_URL";

const URL = `${BASE_URL}news`;

const getNews = async function () {
  const res = await fetch(`${URL}/publisher`, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!res.ok) throw new Error("Unexpected Error Please try again.");

  const data = await res.json();
  return data;
};

const publishNews = async function (object) {
  const res = await fetch(`${URL}`, {
    method: "POST",
    credentials: "include",
    body: object,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();
  return data;
};

const getNewsById = async function (id, userId) {
  const url = `${URL}/${id}${userId ? `?userId=${userId}` : ""}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "GET",
  });

  const data = await res.json();

  return data;
};

const likeNews = async function (newsId) {
  const res = await fetch(`${URL}/like/${newsId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();

  if (res.status !== 200) throw new Error("Could not like the post. Try again");

  return data;
};

const unlikeNews = async function (likeId) {
  const res = await fetch(`${URL}/unlike/${likeId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (res.status !== 200)
    throw new Error("Could not unlike this post. Try again");

  const data = await res.json();

  return data;
};

const comment = async function (newsId, data) {
  const res = await fetch(`${URL}/comment/${newsId}`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const responseData = await res.json();

  if (res.status === 401) throw new Error("Please Log in to make comments");
  if (res.status !== 201)
    throw new Error("An error occured while creating that comment");

  return responseData;
};

const getMainNews = async function () {
  const res = await fetch(`${URL}/main`);
  const data = await res.json();

  console.log(res);
  console.log(data);

  if (res.status !== 200)
    throw new Error("An unexptected Error occured. Please Try again.");
  return data.data;
};

const getNewsUnAuth = async function () {
  const res = await fetch(URL);
  const data = await res.json();

  console.log(res);
  console.log(data);

  if (res.status !== 200)
    throw new Error("An unexpecred Error occured. Try again");

  return data.news;
};

const deleteNews = async function (id) {
  const res = await fetch(`${URL}/delete/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ token: localStorage.getItem("token") }),
  });

  const data = await res.json();
  if (data.status !== "success") throw new Error("An unexpected error occured");
  if (res.status !== 200) throw new Error("An unexpected error occured");

  return data;
};

const editArticle = async function (id, object) {
  const res = await fetch(`${URL}/${id}`, {
    method: "PUT",
    credentials: "include",
    body: object,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};
export {
  getNews,
  publishNews,
  deleteNews,
  getNewsById,
  likeNews,
  unlikeNews,
  comment,
  getMainNews,
  getNewsUnAuth,
  editArticle,
};
