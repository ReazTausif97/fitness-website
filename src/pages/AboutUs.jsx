import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";

const AboutUs = () => {
  const pageName = "ABOUT",
    title = "OUR CLUB",
    hyperLink = "About Us";
  return (
    <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
  );
};
export default AboutUs;
