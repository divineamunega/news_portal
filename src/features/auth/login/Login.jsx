import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useOutletContext,
} from "react-router-dom";

const inputStyle =
  "peer border-b-2  px-2 py-1 transition-colors duration-500  focus:outline-none";
const labelStyle = "font-lora text-sm";
const Login = () => {
  const setPosition = useOutletContext();
  const err = useActionData()?.err;
  const navigation = useNavigation();
  const loading =
    navigation.state === "loading" || navigation.state === "submitting";

  useEffect(() => {
    setPosition("login");
  }, [setPosition]);
  return (
    <Form
      className="flex h-fit w-[80%] flex-col items-center justify-center gap-10 rounded-2xl bg-white px-10 py-10 md:w-[60%]"
      method="POST"
    >
      <p className="text-lg font-bold">Log in to your account</p>
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
                " border-black hover:border-black focus:border-black"
          }
        />

        <label
          htmlFor="password"
          className={
            err
              ? labelStyle +
                " text-red-500 peer-hover:text-red-500 peer-focus:text-red-500"
              : labelStyle +
                " text-black peer-hover:text-black peer-focus:text-black"
          }
        >
          Password
        </label>
      </div>

      <div className="flex w-full flex-col gap-2">
        {err ? <p className="w-full text-left text-red-500">{err}</p> : null}
        <div className="md:hidden">
          <p className="text-black/35">Don&apos;t have an account?</p>
          <Link to="/auth/signup" className="border-b-2 border-black px-1">
            signup
          </Link>
        </div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-2 text-white disabled:bg-black/75"
          disabled={loading}
          type="submit"
        >
          login
          {loading && (
            <RotatingLines width={30} height={30} strokeColor="white" />
          )}
        </button>
      </div>
    </Form>
  );
};

export default Login;
