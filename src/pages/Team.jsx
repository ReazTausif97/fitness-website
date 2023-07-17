import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";

const Team = () => {
  const pageName = "TRAINERS",
    title = "OUR TEAM",
    hyperLink = "Our Team";
  return (
    <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
  );
};
export default Team;
