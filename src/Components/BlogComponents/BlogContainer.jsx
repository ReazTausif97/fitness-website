import { useState } from "react";
import BlogList from "./BlogList";
import { FiSearch } from "react-icons/fi";
import Category from "./Category";
import Pagination from "../Reuse/Pagination";
const BlogContainer = () => {
  const [category, setCategory] = useState("ALL");
  let categories = [
    { name: "ALL", catId: 1 },
    { name: "FITNESS", catId: 2 },
    { name: "HEAVY DIET", catId: 3 },
    { name: "TRAINING", catId: 4 },
    { name: "HEAVY MIND", catId: 5 },
  ];

  return (
    <section className="">
      <div className="px-2 md:px-10 lg:px-2 lg:max-w-7xl lg:mx-auto py-32">
        <div className="flex  flex-wrap items-center justify-between">
          <div className="join flex-wrap">
            {categories.map((cat) => (
              <Category
                key={cat.catId}
                name={cat.name}
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
        <Pagination />
      </div>
    </section>
  );
};
export default BlogContainer;
