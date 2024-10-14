import { getNews } from "../../services/NewsService";

const newsLoader = async () => {
  try {
    const data = await getNews();
    return data.data;
  } catch (err) {
    return { message: err.message };
  }
};

export default newsLoader;
