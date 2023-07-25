import BtnPrimary from "../Reuse/BtnPrimary";
const PhysicalGiftCard = () => {
  return (
    <section className="bg-[#CED2DA]  py-16 lg:py-32">
      <div className="px-2 md:px-10 lg:px-0 lg:max-w-7xl lg:mx-auto flex flex-col lg:flex-row md:flex-row md:gap-10 lg:gap-28 gap-16">
        <img
          className="md:w-1/2 lg:w-3/5"
          src="https://i.ibb.co/ZGCmcsN/50-copy.png"
          alt=""
        />
        <div className="flex flex-col gap-6 justify-center text-center lg:text-start md:text-start">
          <h2 className="font-bold text-2xl">PHYSICAL GIFT</h2>
          <h2 className="font-bold text-6xl">CARD</h2>
          <p>
            When in doubt what to buy as a gift, this is the best option. Our
            gift cards have no expiration date and can be used to pay for all
            the services in our beauty studio or in our cosmetic shop. Amount is
            flexible and you can personalize your gift card with a message.
          </p>
          <div>
            <BtnPrimary>SHOP NOW</BtnPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhysicalGiftCard;
