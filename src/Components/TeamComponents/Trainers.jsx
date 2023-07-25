import Pagination from "../Reuse/Pagination";
import TrainersList from "./TrainersList";

const Trainers = () => {
  return (
    <section className="py-16 lg:py-32 bg-[#000000]">
      <div className="px-2 md:px-10 lg:px-0 lg:max-w-7xl lg:mx-auto text-white ">
        <h2 className="font-bold text-5xl md:text-6xl lg:text-6xl">
          WORLD-CLASS
        </h2>
        <p className="mt-5">Our super heros who makes you sweat.</p>
        <TrainersList />
        <Pagination />
      </div>
    </section>
  );
};
export default Trainers;
