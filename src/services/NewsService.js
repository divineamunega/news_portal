import BASE_URL from "../ BASE_URL";

const URL = `${BASE_URL}news`;

const getNews = async function () {
  const res = await fetch(URL, { method: "GET", credentials: "include" });

  if (res.status === 404) console.log(await res.json());
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

  console.log(data);
  return data;
};

const getNewsById = async function (id) {
  const res = await fetch(`${URL}/${id}`);

  const data = await res.json();

  return data;
};
export { getNews, publishNews, getNewsById };
