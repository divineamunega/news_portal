import { redirect } from "react-router-dom";
import { signupAPI } from "../../../services/Authservice";
import { enqueueSnackbar } from "notistack";

const action = async function ({ request }) {
  const formData = await request.formData();
  const { name, email, password } = Object.fromEntries(formData);

  if (!email || !password || !name) return { err: "Fill all feilds please." };

  try {
    const data = await signupAPI(name, email, password);
    if (data.status === "fail") throw new Error(data.message);

    enqueueSnackbar({ message: "Signed Up", variant: "success" });

    const redirectStr = localStorage.getItem("redirect") || "/";
    localStorage.setItem("redirect", "");

    localStorage.setItem("token", data.data.token);
    return redirect(redirectStr);
  } catch (err) {
    return { err: err.message.replaceAll("Error:", "").trim() };
  }
};

export default action;
