import BASE_URL from "../ BASE_URL";

const URL = `${BASE_URL}news`;

const getNews = async function () {
  const res = await fetch(URL, { method: "GET", credentials: "include" });

  if (res.status === 404) console.log(await res.json());
  if (!res.ok) throw new Error("Unexpected Error Please try again.");

  const data = await res.json();
  return data;
};

export { getNews };
