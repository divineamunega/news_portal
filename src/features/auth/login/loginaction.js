import { redirect } from "react-router-dom";
import { loginAPI } from "../../../services/Authservice";

const action = async function ({ request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  if (!email || !password) return { err: "Fill both feilds please." };

  try {
    const data = await loginAPI(email, password);

    if (data.data.user.role === "ADMIN") {
      return redirect("/admin");
    }

    if (data.data.user.role === "PUBLISHER") {
      return redirect("/publishers");
    }
  } catch (err) {
    return { err: err.message.replaceAll("Error:", "").trim() };
  }
  return null;
};

export default action;
