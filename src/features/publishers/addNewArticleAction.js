import { redirect } from "react-router-dom";
import { publishNews } from "../../services/NewsService";

const action = async function ({ request }) {
  const formData = await request.formData();
  const object = Object.fromEntries(formData);

  if (object.publish === "publish") {
    // Check if they are empty
    if (Object.entries(object).some((arr) => arr[1] === ""))
      return { err: "Please fill all feilds" };

    const { title, description, section, subSection, newsImage, content } =
      object;
    const newFormData = new FormData();

    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("section", section);
    newFormData.append("subSection", subSection);
    newFormData.append("content", content);
    newFormData.append("newsImage", newsImage);
    newFormData.append("token", localStorage.getItem("token"));

    try {
      const data = await publishNews(newFormData);
      if (data.status === "fail") throw new Error(data.message);

      return redirect("/publishers/news");
    } catch (err) {
      console.log(err);
      return { err: err.message };
    }
  }

  return null;
};

export default action;
