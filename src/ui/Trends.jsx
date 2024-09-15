import useInViewport from "../hooks/useInViewport";
import TextSlider from "./TextSlider";

const Trends = () => {
  const [inViewPort, viewPortRef] = useInViewport();
  return (
    <div
      className="mb-10 flex items-center gap-5 px-5 pt-5 md:px-8 md:pt-5 lg:px-24"
      ref={viewPortRef}
    >
      <div className="bg-electricBlue px-3 py-[1px]">
        <p className="text-nowrap text-[0.6rem] md:text-base">Trending Now</p>
      </div>

      {inViewPort ? (
        <div className="no-scrollbar flex basis-2/3 items-center overflow-auto text-nowrap">
          <TextSlider />
        </div>
      ) : null}
    </div>
  );
};

export default Trends;
