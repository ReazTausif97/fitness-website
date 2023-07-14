import banner from "../../assets/banner.png";
import BtnPrimary from "../Reuse/BtnPrimary";

const Hero = () => {
  return (
    <section>
      <div
        className=" flex px-72 items-center -z-20 h-[750px] w-full bg-cover"
        style={{
          backgroundImage: `url("https://i.ibb.co/SdwsMVC/banner.png")`,
        }}
      >
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
