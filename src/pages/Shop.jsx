import BookTour from "../Components/MembershipComponenets/BookTour";
import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";
import ProductContainer from "../Components/ShopComponents/ProductContainer";

const Shop = () => {
  const pageName = "SHOP",
    title = "OUR SHOP",
    hyperLink = "Shop";

  return (
    <>
      <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
      <ProductContainer />
      <BookTour />
    </>
  );
};
export default Shop;
