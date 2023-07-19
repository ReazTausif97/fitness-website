import Features from "../Components/MembershipComponenets/Features";
import MembershipPricing from "../Components/MembershipComponenets/MembershipPricing";
import BookTour from "../Components/Reuse/BookTour";
import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";
import SocialMedia from "../Components/Reuse/SocialMedia";

const Membership = () => {
  const pageName = "OUR",
    title = "Membership",
    hyperLink = "Membership";
  return (
    <>
      <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
      <Features />
      <MembershipPricing />
      <BookTour />
      <SocialMedia />
    </>
  );
};
export default Membership;
