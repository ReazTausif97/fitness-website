import { BsCircle } from "react-icons/bs";
import BtnPrimary from "../Reuse/BtnPrimary";
const HeaderDetails = () => {
  return (
    <section className="bg-[#CED2DA] py-32">
      <div className="max-w-7xl mx-auto flex gap-20">
        <div className="">
          <img
            className=""
            src="https://i.ibb.co/0BLR202/wepik-export-20230717000208-Yds-F.png"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-center gap-10">
          <div className="font-semibold flex items-center gap-3 text-[#4C5580]">
            <p>December 18, 2021</p>
            <BsCircle className="text-[8px]" />
            <p>Fitness</p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-6xl font-extrabold">EVERYTHING YOU </h2>
            <h2 className="text-6xl font-extrabold">NEED TO KNOW</h2>
          </div>
          <p>
            When in doubt what to buy as a gift, this is the best option. Our
            gift cards have no expiration date and can be used to pay for all
            the service in our beauty studio or in our cosmetic shop. Amount is
            flexible and you can personalize your gift card with a message.
          </p>
          <div>
            <BtnPrimary className="font-bold">LEARN MORE</BtnPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeaderDetails;
