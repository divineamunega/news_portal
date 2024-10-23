import { redirect } from "react-router-dom";
import { signupAdmin } from "../../services/Authservice";
import { enqueueSnackbar } from "notistack";

const action = async function ({ request }) {
  const formData = await request.formData();
  const { name, email, password } = Object.fromEntries(formData);

  if (!email || !password || !name) return { err: "Fill all feilds please." };

  try {
    const data = await signupAdmin(name, email, password);
    if (data.status === "fail") throw new Error(data.message);

    enqueueSnackbar({
      message: "Admin created successfully",
      variant: "success",
    });
    return redirect("/admin");
  } catch (err) {
    return { err: err.message.replaceAll("Error:", "").trim() };
  }
};

export default action;
