import Features from "../Components/MembershipComponenets/Features";
import MembershipPricing from "../Components/MembershipComponenets/MembershipPricing";
import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";

const Membership = () => {
  const pageName = "OUR",
    title = "Membership",
    hyperLink = "Membership";
  return (
    <>
      <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
      <Features />
      <MembershipPricing />
    </>
  );
};
export default Membership;
