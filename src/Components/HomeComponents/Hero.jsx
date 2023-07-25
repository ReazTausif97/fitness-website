import BtnPrimary from "../Reuse/BtnPrimary";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-right h-[700px] sm:bg-cover sm:bg-right lg:bg-cover lg:bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),url("https://i.ibb.co/dPXyfYt/banner-1-min.png")`,
      }}
    >
      <div className="flex items-center h-full lg:px-0 px-2 md:px-10 lg:max-w-7xl lg:mx-auto">
        <div className="w-full flex flex-col gap-10  lg:text-start md:text-start lg:items-start md:items-start items-center text-center text-5xl md:text-8xl lg:text-8xl font-extrabold z-10">
          <div>
            <h2>KRON</h2>
            <h2 className="">FITNESS</h2>
          </div>
          <BtnPrimary>Get Free Class</BtnPrimary>
        </div>
      </div>
    </section>
  );
};
export default Hero;
