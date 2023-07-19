import { MdSanitizer } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { RiSurgicalMaskLine } from "react-icons/ri";
import BtnPrimary from "../Reuse/BtnPrimary";

const BestStandard = () => {
  return (
    <section className="max-w-7xl mx-auto py-32">
      <div className="text-center items-center flex flex-col gap-10 ">
        <h2 className="text-6xl font-bold">THE BEST SAFETY STANDARDS</h2>
        <p className="w-1/3">
          We've updated our amenities with the changing times. Your safety is
          our priority now. All equipment isregularly sanitized and our team
          members always have their mask on.
        </p>
      </div>
      <div className="flex justify-evenly py-20">
        <div className="flex flex-col gap-5 text-center items-center">
          <MdSanitizer className="text-7xl  text-[#303b6d]" />
          <h2 className="font-bold text-2xl">HAND SANITIZER</h2>
          <p className="w-2/3">Hand sanitizer stations throughout the club</p>
        </div>
        <div className="flex flex-col gap-5 text-center items-center">
          <BsSun className="text-7xl text-[#303b6d]" />
          <h2 className="font-bold text-2xl">UV-C LIGHT SANITIZERS</h2>
          <p className="w-2/3">Hand sanitizer stations throughout the club</p>
        </div>
        <div className="flex flex-col gap-5 text-center items-center ">
          <RiSurgicalMaskLine className="text-7xl text-[#303b6d]" />
          <h2 className="font-bold text-2xl">FACE MASKS</h2>
          <p className="w-2/3">Hand sanitizer stations throughout the club</p>
        </div>
      </div>
      <div className="w-full text-center">
        <BtnPrimary>CLAIM FIRST TIME OFFER</BtnPrimary>
      </div>
    </section>
  );
};
export default BestStandard;
