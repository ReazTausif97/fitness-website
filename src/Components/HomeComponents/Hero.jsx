import BtnPrimary from "../Reuse/BtnPrimary";

const Hero = () => {
  return (
    <section
      className="bg-cover -z-20 h-[750px] w-full "
      style={{
        backgroundImage: `url("https://i.ibb.co/SdwsMVC/banner.png")`,
      }}
    >
      <div className=" flex items-center h-full max-w-7xl mx-auto">
        <div className="text-8xl font-extrabold z-10">
          <h2>KRON</h2>
          <h2 className="mt-5">FITNESS</h2>
          <BtnPrimary>Get Free Class</BtnPrimary>
        </div>
      </div>
    </section>
  );
};
export default Hero;
