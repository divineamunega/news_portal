import { redirect } from "react-router-dom";
import { signupAPI } from "../../../services/Authservice";

const action = async function ({ request }) {
  const formData = await request.formData();
  const { name, email, password } = Object.fromEntries(formData);

  if (!email || !password || !name) return { err: "Fill all feilds please." };

  try {
    const data = await signupAPI(name, email, password);
    if (data.status === "fail") throw new Error(data.message);

    return redirect("/");
  } catch (err) {
    return { err: err.message.replaceAll("Error:", "").trim() };
  }
};

export default action;
