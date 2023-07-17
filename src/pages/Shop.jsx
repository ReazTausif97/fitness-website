import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";

const Shop = () => {
  const pageName = "SHOP",
    title = "OUR SHOP",
    hyperLink = "Shop";
  return (
    <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
  );
};
export default Shop;
