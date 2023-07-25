import BtnPrimary from "../Reuse/BtnPrimary";
const StartJourney = () => {
  return (
    <section className="bg-[#000000] py-32">
      <div className="px-2 md:px-10 lg:px-0 lg:max-w-7xl lg:mx-auto flex flex-col-reverse lg:flex-row md:flex-row md:gap-28 lg:gap-28 gap-16">
        <div className="text-white flex flex-col gap-6  justify-center text-center lg:text-start md:text-start">
          <h2 className="font-bold text-2xl">HOW IT</h2>
          <h2 className="font-bold text-6xl">STARTED</h2>
          <p>
            Hi, My name is Teresa Lowe and I know all about healthy lifestyle. I
            also know how to motivate people as I am certified psychologist,
            nutrisionist and personal trainer. My program has already helped
            10k+ people . Join my team and see results in two weeks. Money back
            guarantee.
          </p>
          <div>
            <BtnPrimary>SEE ALL CLASSES</BtnPrimary>
          </div>
        </div>
        <img
          className=" md:w-1/2 lg:w-3/5"
          src="https://i.ibb.co/SQwbmC8/valery-sysoev-LDAir-ERNzew-unsplash-min.jpg"
          alt=""
        />
      </div>
    </section>
  );
};
export default StartJourney;
