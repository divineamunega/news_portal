import { redirect } from "react-router-dom";
import { loginAPI } from "../../../services/Authservice";
import { enqueueSnackbar } from "notistack";

const action = async function ({ request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  if (!email || !password) return { err: "Fill both feilds please." };

  try {
    const data = await loginAPI(email, password);

    localStorage.setItem("token", data.data.token);
    if (data.data.user.role === "ADMIN") {
      return redirect("/admin");
    }

    if (data.data.user.role === "PUBLISHER") {
      return redirect("/publishers");
    }

    enqueueSnackbar({ message: "Logged In", variant: "success" });

    const redirectStr = localStorage.getItem("redirect") || "/";
    localStorage.setItem("redirect", "");

    return redirect(redirectStr);
  } catch (err) {
    return { err: err.message.replaceAll("Error:", "").trim() };
  }
};

export default action;
