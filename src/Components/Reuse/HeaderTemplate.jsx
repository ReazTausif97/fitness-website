import React from "react";

export function HeaderTemplate({ pageName, title, hyperLink }) {
  return (
    <div className="h-[450px] max-w-7xl mx-auto gap-5 flex flex-col justify-center">
      <div className="">
        <h2 className="text-3xl font-bold">{pageName}</h2>
        <h2 className="text-6xl font-bold">{title}</h2>
      </div>
      <p className="text-lg">
        Home / <span className="text-blue-800">{hyperLink}</span>
      </p>
      <hr className="border-[#989BA1]" />
    </div>
  );
}
