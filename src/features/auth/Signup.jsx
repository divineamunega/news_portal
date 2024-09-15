import { useEffect } from "react";
import { Form, Link, useOutletContext } from "react-router-dom";
const Signup = () => {
  const setPosition = useOutletContext();

  useEffect(() => {
    setPosition("signup");
  }, [setPosition]);

  return (
    <Form className="flex h-fit w-[80%] flex-col items-center justify-center gap-10 rounded-2xl bg-white px-10 py-10 md:w-[60%]">
      <p className="text-lg font-bold">Create an account</p>
      <div className="flex w-full flex-col-reverse">
        <input
          type="text"
          id="name"
          className="peer border-b-2 border-black/30 px-2 py-1 transition-colors duration-500 hover:border-black focus:border-black focus:outline-none"
        />
        <label
          htmlFor="name"
          className="font-lora text-sm text-black/30 peer-hover:text-black peer-focus:text-black"
        >
          Name
        </label>
      </div>
      <div className="flex w-full flex-col-reverse">
        <input
          type="email"
          id="email"
          className="peer border-b-2 border-black/30 px-2 py-1 transition-colors duration-500 hover:border-black focus:border-black focus:outline-none"
        />
        <label
          htmlFor="email"
          className="font-lora text-sm text-black/30 peer-hover:text-black peer-focus:text-black"
        >
          Email
        </label>
      </div>

      <div className="flex w-full flex-col-reverse">
        <input
          type="password"
          id="password"
          className="peer border-b-2 border-black/30 px-2 py-1 transition-colors duration-500 hover:border-black focus:border-black focus:outline-none"
        />

        <label
          htmlFor="password"
          className="font-lora text-sm text-black/30 peer-hover:text-black peer-focus:text-black"
        >
          Password
        </label>
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="md:hidden">
          <p className="text-black/35">Already have an account?</p>
          <Link to="/auth/login" className="border-b-2 border-black px-1">
            login
          </Link>
        </div>
        <button className="w-full rounded-xl bg-black py-2 text-white">
          signup
        </button>
      </div>
    </Form>
  );
};

export default Signup;
