import BtnPrimary from "../Reuse/BtnPrimary";
const PhysicalGiftCard = () => {
  return (
    <section className="bg-[#CED2DA]  py-32">
      <div className="max-w-7xl mx-auto flex gap-28">
        <img
          className="w-3/5"
          src="https://i.ibb.co/ZGCmcsN/50-copy.png"
          alt=""
        />
        <div className="flex flex-col gap-6  justify-center">
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
