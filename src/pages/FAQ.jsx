import EGiftCard from "../Components/FAQComponents/EGiftCard";
import FrequentlyAsked from "../Components/FAQComponents/FrequentlyAsked";
import PhysicalGiftCard from "../Components/FAQComponents/PhysicalGiftCard";
import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";
const FAQ = () => {
  const pageName = "F.A.Q",
    title = "GIFT CARDS",
    hyperLink = "F.A.Q";

  return (
    <>
      <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
      <EGiftCard />
      <PhysicalGiftCard />
      <FrequentlyAsked />
    </>
  );
};
export default FAQ;
