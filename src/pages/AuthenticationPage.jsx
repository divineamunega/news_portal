import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AuthenticationPage = () => {
  const [position, setPosition] = useState("");
  return (
    <div className="flex h-[100dvh] w-[100dvw] gap-6 overflow-x-clip sm:w-[99dvw] sm:px-10 sm:py-5">
      <div className="hidden h-full w-1/2 flex-col items-center justify-center gap-32 overflow-hidden rounded-xl md:flex">
        <div className="flex flex-col gap-3">
          <p className="text-center font-lora text-2xl font-bold">
            LARGEST NEWS SOURCE IN SCHOOL
          </p>
          <h3 className="text-center text-5xl">
            POWERED BY PUBLISHERS IN{" "}
            <span className="underline decoration-darkCyan decoration-wavy">
              SCHOOL
            </span>
          </h3>
        </div>
        {position === "login" ? (
          <div className="flex flex-col items-center gap-1">
            <p className="text-base text-black/40">
              Don&apos;t have an account
            </p>
            <Link
              to="signup"
              className="w-fit border-b-2 border-transparent py-2 text-center text-sm transition-colors duration-500 hover:border-black"
            >
              Create New Account &rarr;
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <p className="text-base text-black/40">Already have an account?</p>
            <Link
              to="login"
              className="w-fit border-b-2 border-transparent py-2 text-center text-sm transition-colors duration-500 hover:border-black"
            >
              Log in &rarr;
            </Link>
          </div>
        )}
      </div>
      <div
        className="h-full w-full rounded-xl md:w-1/2"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1710845423266-f6396cc06c03?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 backdrop-blur-sm backdrop-brightness-[0.7] sm:rounded-xl">
          <div className="text-center font-lora text-white">
            <p className="text-2xl font-bold">ACU News</p>
            <p className="text-2xl font-bold">Best News In any School</p>
          </div>

          <Outlet context={setPosition} />
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
