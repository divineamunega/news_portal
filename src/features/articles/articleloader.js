import { getNewsById } from "../../services/NewsService";

const articleloader = async function ({ params }) {
  const { id } = params;

  let userId = sessionStorage.getItem("userId");
  console.log(userId);

  try {
    const data = await getNewsById(id, userId);
    if (data.status === "fail") throw new Error(data.message);
    console.log(data.data);
    return data.data;
  } catch (err) {
    return { err: err.message };
  }
};

export default articleloader;
