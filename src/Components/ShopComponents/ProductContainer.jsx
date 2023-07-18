import { useState } from "react";
import ProductCategories from "./ProductCategories";
import { FiSearch } from "react-icons/fi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ProductsList from "./ProductsList";
const ProductContainer = () => {
  const [category, setCategory] = useState("ALL PRODUCTS");
  let categories = [
    { name: "ALL PRODUCTS", catId: 1 },
    { name: "ACCESSORIES", catId: 2 },
    { name: "EQUIPMENT", catId: 3 },
    { name: "OTHER", catId: 4 },
  ];

  return (
    <section className="max-w-7xl mx-auto py-32">
      <div className="flex justify-between">
        <div className="join">
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
      <div className="flex items-center justify-center">
        <div className="join">
          <button className="btn hover:text-black join-item border-none font-bold text-base text-[#CED2DA]">
            <BsArrowLeft className="" />
            PREV
          </button>
          <button className="btn hover:text-black join-item border-none font-bold text-base ">
            1
          </button>
          <button className="btn hover:text-black join-item border-none font-bold text-base text-[#CED2DA]">
            2
          </button>
          <button className="btn hover:text-black join-item border-none font-bold text-base text-[#CED2DA]">
            3
          </button>
          <button className="btn hover:text-black join-item border-none font-bold text-base text-[#CED2DA]">
            ...
          </button>
          <button className="btn hover:text-black join-item border-none font-bold text-base text-[#CED2DA]">
            10
          </button>

          <button className="btn hover:text-black join-item border-none font-bold text-base text-[#CED2DA]">
            NEXT
            <BsArrowRight className="" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default ProductContainer;
