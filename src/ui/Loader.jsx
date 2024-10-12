import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex h-[100dvh] w-[98dvw] items-center justify-center">
      <RotatingLines width="80" height="80" strokeColor="black" />
    </div>
  );
};

export default Loader;
