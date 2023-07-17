import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";

const FAQ = () => {
  const pageName = "F.A.Q",
    title = "GIFT CARDS",
    hyperLink = "F.A.Q";

  return (
    <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
  );
};
export default FAQ;
