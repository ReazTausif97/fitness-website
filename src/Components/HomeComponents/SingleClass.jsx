import React from "react";
function SingleClass({ Image, Details, Classtitle }) {
  return (
    <div>
      <img className="h-[500px] w-full " src={Image} alt="" />
      <h2 className="font-bold mt-5 text-2xl">{Classtitle}</h2>
      <p className="mt-5">{Details}</p>
      <button className="mt-5 text-[#303b6d] font-semibold text-sm">
        LEARN MORE
      </button>
    </div>
  );
}

export default SingleClass;
