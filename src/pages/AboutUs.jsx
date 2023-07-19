import BestStandard from "../Components/AboutUsComponents/BestStandard";
import OurTeamSection from "../Components/AboutUsComponents/OurTeamSection";
import StartJourney from "../Components/AboutUsComponents/StartJourney";
import BookTour from "../Components/Reuse/BookTour";
import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";
import SocialMedia from "../Components/Reuse/SocialMedia";

const AboutUs = () => {
  const pageName = "ABOUT",
    title = "OUR CLUB",
    hyperLink = "About Us";
  return (
    <>
      <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
      <StartJourney />
      <BestStandard />
      <OurTeamSection />
      <BookTour />
      <SocialMedia />
    </>
  );
};
export default AboutUs;
