import BtnPrimary from "../Reuse/BtnPrimary";
const StartJourney = () => {
  return (
    <section className="bg-[#000000] py-32">
      <div className="max-w-7xl mx-auto flex gap-28">
        <div className="text-white flex flex-col gap-6  justify-center">
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
          className="w-3/5"
          src="https://i.ibb.co/kJnxJ7L/valery-sysoev-LDAir-ERNzew-unsplash.jpg"
          alt=""
        />
      </div>
    </section>
  );
};
export default StartJourney;
