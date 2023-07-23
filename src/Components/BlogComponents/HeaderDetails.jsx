import { BsCircle } from "react-icons/bs";
import BtnPrimary from "../Reuse/BtnPrimary";
const HeaderDetails = () => {
  return (
    <section className="bg-[#CED2DA] py-16 lg:py-32">
      <div className="px-2 md:px-10 lg:px-0 lg:max-w-7xl lg:mx-auto flex lg:flex-row md:flex-row flex-col gap-10 lg:gap-20">
        <img
          className=" md:w-1/2 lg:w-1/2"
          src="https://i.ibb.co/0BLR202/wepik-export-20230717000208-Yds-F.png"
          alt=""
        />
        <div className="flex flex-col justify-center text-center lg:text-start md:text-start  gap-5 lg:gap-10">
          <div className="justify-center lg:justify-start md:justify-start font-semibold flex items-center gap-3 text-[#4C5580]">
            <p>December 18, 2021</p>
            <BsCircle className="text-[8px]" />
            <p>Fitness</p>
          </div>
          <div className="">
            <h2 className="text-4xl lg:text-6xl font-extrabold">
              EVERYTHING YOU NEED TO KNOW
            </h2>
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
