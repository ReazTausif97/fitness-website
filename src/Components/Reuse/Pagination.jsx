import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
function Pagination() {
  return (
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
  );
}

export default Pagination;
