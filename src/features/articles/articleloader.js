import { getNewsById } from "../../services/NewsService";

const articleloader = async function ({ params, request }) {
  const { id } = params;

  let userId = "";
  if (request.url.split("?")[1]?.startsWith("userId=")) {
    userId = request.url.split("?")[1].split("=")[1];
  }

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
