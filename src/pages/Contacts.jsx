import ContactMethods from "../Components/ContactComponents/ContactMethods";
import ContactusSection from "../Components/ContactComponents/ContactusSection";
import MapSection from "../Components/ContactComponents/MapSection";
import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";

const Contacts = () => {
  const pageName = "OUR",
    title = "CONTACTS",
    hyperLink = "Contacts";
  return (
    <>
      <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
      <ContactMethods />
      <MapSection />
      {/* <ContactusSection /> */}
    </>
  );
};
export default Contacts;
