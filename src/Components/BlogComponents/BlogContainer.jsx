import { useState } from "react";
import BlogList from "./BlogList";
import { FiSearch } from "react-icons/fi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Category from "./Category";
const BlogContainer = () => {
  const [category, setCategory] = useState("ALL");
  let categories = [
    { name: "ALL", catId: 1 },
    { name: "FITNESS", catId: 2 },
    { name: "HEAVY DIET", catId: 3 },
    { name: "TRAINING" },
    { name: "HEAVY MIND", catId: 4 },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto py-32">
        <div className="flex items-center justify-between">
          <div className="join">
            {categories.map((cat) => (
              <Category
                name={cat.name}
                key={cat.catId}
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
        <BlogList />
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
      </div>
    </section>
  );
};
export default BlogContainer;
