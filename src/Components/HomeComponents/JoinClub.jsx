import BtnPrimary from "../Reuse/BtnPrimary";

const JoinClub = () => {
  return (
    <section
      className="  px-72 py-36  flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3)), url("https://i.ibb.co/K7Y19tW/confident-young-muscular-caucasian-athlete-practicing-gym-with-weights-male-model-doing-strength-exe.jpg")`,
      }}
    >
      <div className=" text-white text-center">
        <h2 className="font-bold text-6xl">JOIN THE CLUB</h2>
        <p className="mt-5">
          City Gym has awesome aminities, the best equipment,
        </p>
        <p>professional stuff and lot more.</p>
        <div className="mt-5">
          <BtnPrimary>BECOME A MEMBER</BtnPrimary>
        </div>
      </div>
    </section>
  );
};
export default JoinClub;
