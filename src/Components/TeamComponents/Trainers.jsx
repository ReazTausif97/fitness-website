import Pagination from "../Reuse/Pagination";
import TrainersList from "./TrainersList";

const Trainers = () => {
  return (
    <section className="py-32 bg-[#000000]">
      <div className="max-w-7xl mx-auto text-white ">
        <h2 className="font-bold text-6xl">WORLD-CLASS</h2>
        <p className="mt-5">Our super heros who makes you sweat.</p>
        <TrainersList />
        <Pagination />
      </div>
    </section>
  );
};
export default Trainers;
