import BtnPrimary from "../Reuse/BtnPrimary";

const BookTour = () => {
  return (
    <section className="max-w-7xl py-32 mx-auto flex flex-col gap-6 ">
      <h2 className="text-6xl font-bold">BOOK A TOUR</h2>
      <p>
        Structured powered practice that focuses on mastery of poses and
        progression to more advanced levels.
      </p>
      <div className="join flex">
        <BtnPrimary className="btn join-item rounded-none rounded-r-full">
          BOOK TOUR
        </BtnPrimary>
        <input
          className="w-full input input-bordered rounded-none font-semibold join-item focus:outline-none placeholder-[#303B6D] border-[#CED2DA] "
          placeholder="Enter your Email address"
        />
      </div>
    </section>
  );
};
export default BookTour;
