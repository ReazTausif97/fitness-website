import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
const ProductsList = () => {
  const URL = "data/AllProducts.json";
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const getProduct = async (URL) => {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        setProductDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct(URL);
  }, []);
  return (
    <div className=" ">
      <div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-10 py-10">
        {productDetails.map((value) => (
          <SingleProduct
            Image={value.Image}
            key={value.id}
            productBadge={value.productBadge}
            ProductName={value.ProductName}
            regularPrice={value.regularPrice}
            discountPrice={value.discountPrice}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductsList;
