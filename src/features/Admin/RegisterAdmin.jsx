import { RotatingLines } from "react-loader-spinner";
import useAuth from "../auth/useAuth";
import useIsLoggedIn from "../auth/useIsLoggedIn";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import NavBar from "../../ui/NavBar";
const RegisterAdmin = function () {
  useIsLoggedIn("ADMIN");
  const { isAuthenticated, isLoading } = useAuth();

  const navigation = useNavigation();
  const loading =
    navigation.state === "loading" || navigation.state === "submitting";
  console.log(loading);

  const err = useActionData()?.err;

  const inputStyle =
    "peer border-b-2  px-2 py-1 transition-colors duration-500  focus:outline-none";

  const labelStyle = "font-lora text-sm";

  if (isLoading)
    return (
      <div className="flex h-[100dvh] w-[98dvw] items-center justify-center">
        <RotatingLines width="80" height="80" strokeColor="black" />
      </div>
    );

  if (!isAuthenticated && !isLoading) {
    return (
      <div>
        <NavBar />

        <div className="flex h-[50vh] flex-col items-center justify-center">
          <p className="text-3xl font-bold">
            Could not log you in. Please Login again
          </p>

          <Link to="/auth/login" className="text-blue-500">
            {" "}
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-[100dvh] w-full items-center justify-center"
      style={{
        background:
          "black url(https://media.gettyimages.com/id/157505397/photo/quandrangle-lawn-at-the-university-of-washington.webp?s=1024x1024&w=gi&k=20&c=N8IsyzTcLozU_ZMNtrvo38FlVrLQ5Wz5T3iV-ZLA-oU=)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // filter: "brightness(40%)",
      }}
    >
      <Form
        method="POST"
        className="z-10 flex h-fit w-[80%] flex-col items-center justify-center gap-10 rounded-2xl bg-white px-10 py-10 opacity-80 md:w-[30%]"
      >
        <p className="text-lg font-bold">Create an admin</p>
        <div className="flex w-full flex-col-reverse">
          <input
            type="text"
            id="name"
            name="name"
            className={
              err
                ? inputStyle +
                  " border-red-500/50 hover:border-red-500 focus:border-red-500"
                : inputStyle +
                  " border-black/30 hover:border-black focus:border-black"
            }
          />
          <label
            htmlFor="name"
            className={
              err
                ? labelStyle +
                  " text-red-500 peer-hover:text-red-500 peer-focus:text-red-500"
                : labelStyle +
                  " text-black/30 peer-hover:text-black peer-focus:text-black"
            }
          >
            Name
          </label>
        </div>
        <div className="flex w-full flex-col-reverse">
          <input
            type="email"
            id="email"
            name="email"
            className={
              err
                ? inputStyle +
                  " border-red-500/50 hover:border-red-500 focus:border-red-500"
                : inputStyle +
                  " border-black/30 hover:border-black focus:border-black"
            }
          />
          <label
            htmlFor="email"
            className={
              err
                ? labelStyle +
                  " text-red-500 peer-hover:text-red-500 peer-focus:text-red-500"
                : labelStyle +
                  " text-black/30 peer-hover:text-black peer-focus:text-black"
            }
          >
            Email
          </label>
        </div>

        <div className="flex w-full flex-col-reverse">
          <input
            type="password"
            id="password"
            name="password"
            className={
              err
                ? inputStyle +
                  " border-red-500/50 hover:border-red-500 focus:border-red-500"
                : inputStyle +
                  " border-black/30 hover:border-black focus:border-black"
            }
          />

          <label
            className={
              err
                ? labelStyle +
                  " text-red-500 peer-hover:text-red-500 peer-focus:text-red-500"
                : labelStyle +
                  " text-black/30 peer-hover:text-black peer-focus:text-black"
            }
            htmlFor="password"
          >
            Password
          </label>
        </div>

        <div className="flex w-full flex-col gap-2">
          {err ? <p className="w-full text-left text-red-500">{err}</p> : null}

          <button
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-2 text-white disabled:bg-black/75"
            disabled={loading}
            type="submit"
          >
            register
            {loading && (
              <RotatingLines width={30} height={30} strokeColor="white" />
            )}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterAdmin;
