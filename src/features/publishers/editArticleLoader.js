import { getNewsById } from "../../services/NewsService";

export default async function ({ params }) {
  const { id } = params;

  let userId = sessionStorage.getItem("userId");
  console.log(userId);

  try {
    const data = await getNewsById(id, userId);
    if (data.status === "fail") throw new Error(data.message);
    return data.data;
  } catch (err) {
    return { err: err.message };
  }
}
