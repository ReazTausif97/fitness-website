import { useState } from "react";
import ProductCategories from "./ProductCategories";
import { FiSearch } from "react-icons/fi";

import ProductsList from "./ProductsList";
import Pagination from "../Reuse/Pagination";
const ProductContainer = () => {
  const [category, setCategory] = useState("ALL PRODUCTS");
  let categories = [
    { name: "ALL PRODUCTS", catId: 1 },
    { name: "ACCESSORIES", catId: 2 },
    { name: "EQUIPMENT", catId: 3 },
    { name: "OTHER", catId: 4 },
  ];

  return (
    <section className="px-2 md:px-10 lg:px-2 lg:max-w-7xl lg:mx-auto py-32">
      <div className="flex  flex-wrap items-center justify-between">
        <div className="join flex-wrap">
          {categories.map((value) => (
            <ProductCategories
              key={value.catId}
              name={value.name}
              category={category}
              setCategory={setCategory}
            />
          ))}
        </div>
        <div className="join rounded-none font-semibold border border-[#CED2DA]">
          <input
            className="input input-bordered border-none join-item placeholder-black focus:outline-none"
            placeholder="Search..."
          />
          <button className="btn join-item rounded-r-full border-none">
            <FiSearch className="text-lg" />
          </button>
        </div>
      </div>
      <ProductsList />
      <Pagination />
    </section>
  );
};
export default ProductContainer;
