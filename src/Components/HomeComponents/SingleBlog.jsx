import React from "react";
export function SingleBlog({ Date, Image, Blogtitle, Tag }) {
  return (
    <div className="">
      <div
        className=" h-[500px] bg-cover bg-center bg-black"
        style={{ backgroundImage: `url(${Image})` }}
      >
        {/* <img className="h-[500px] w-full" src={Image} alt="" /> */}
      </div>
      <div className="items-center mt-5 flex gap-5 text-[#303b6d] font-semibold">
        <p>{Date}</p>
        <i className="text-xs fa-regular fa-circle"></i>
        <p>{Tag}</p>
      </div>
      <h2 className="font-bold mt-5 text-2xl">{Blogtitle}</h2>
      <button className="mt-5 text-[#303b6d]  font-bold text-sm">
        LEARN MORE
      </button>
    </div>
  );
}
