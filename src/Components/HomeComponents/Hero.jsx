import BtnPrimary from "../Reuse/BtnPrimary";

const Hero = () => {
  return (
    <section
      className="bg-[length:100%_100%] lg:bg-cover lg:bg-center h-[700px]"
      style={{
        backgroundImage: `url("https://i.ibb.co/SdwsMVC/banner.png")`,
      }}
    >
      <div className="flex items-center h-full lg:px-0 md:px-5 lg:max-w-7xl lg:mx-auto">
        <div className="text-7xl md:text-8xl lg:text-8xl font-extrabold z-10">
          <h2>KRON</h2>
          <h2 className="mt-5">FITNESS</h2>
          <BtnPrimary>Get Free Class</BtnPrimary>
        </div>
      </div>
    </section>
  );
};
export default Hero;
