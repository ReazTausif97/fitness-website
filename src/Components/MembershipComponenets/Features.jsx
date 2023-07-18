import { LiaHandshakeSolid, LiaDumbbellSolid } from "react-icons/lia";
import { PiRocketLaunchDuotone } from "react-icons/pi";

const Features = () => {
  return (
    <section>
      <div className="flex max-w-7xl mx-auto gap-10 items-center justify-evenly h-[400px]">
        <div className="flex flex-col items-center gap-5 text-center">
          <LiaHandshakeSolid className="text-7xl text-[#303B6D]" />
          <h2 className="text-2xl font-bold">EASY TO GIVE</h2>
          <div>
            <p>Electronic gift card can be sent with a </p>
            <p>coule of clicks. Easy as is, fastest</p>
            <p>delivery possible.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 text-center ">
          <PiRocketLaunchDuotone className="text-7xl text-[#303B6D]" />
          <h2 className="text-2xl font-bold">NO AMOUNT LIMITATION</h2>
          <div>
            <p>Electronic gift card can be sent with a </p>
            <p>coule of clicks. Easy as is, fastest</p>
            <p>delivery possible.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 text-center ">
          <LiaDumbbellSolid className="text-7xl text-[#303B6D]" />
          <h2 className="text-2xl font-bold">BEAUTIFULLY PERSONALIZED</h2>
          <div>
            <p>Electronic gift card can be sent with a</p>
            <p>coule of clicks. Easy as is, fastest</p>
            <p>delivery possible.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
