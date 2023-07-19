import BookTour from "../Components/Reuse/BookTour";
import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";
import SocialMedia from "../Components/Reuse/SocialMedia";
import Trainers from "../Components/TeamComponents/Trainers";
SocialMedia;
const Team = () => {
  const pageName = "TRAINERS",
    title = "OUR TEAM",
    hyperLink = "Our Team";
  return (
    <>
      <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
      <Trainers />
      <BookTour />
      <SocialMedia />
    </>
  );
};
export default Team;
