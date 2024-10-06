import { redirect } from "react-router-dom";
import { comment } from "../../services/NewsService";

const articleAction = async function ({ params, request }) {
  const { id } = params;
  const formData = await request.formData();
  const { content } = Object.fromEntries(formData);
  if (!content) return { err: "You cannot submit an empty comment" };
  try {
    await comment(id, { content });
    return redirect("");
  } catch (err) {
    return { err: err.message };
  }
};

export default articleAction;
