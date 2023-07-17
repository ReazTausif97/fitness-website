import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";

const Contacts = () => {
  const pageName = "OUR",
    title = "CONTACTS",
    hyperLink = "Contacts";
  return (
    <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
  );
};
export default Contacts;
