import React from "react";

export function HeaderTemplate({ pageName, title, hyperLink }) {
  return (
    <section
      className="bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url("https://i.ibb.co/MZyc6Hc/victor-freitas-Wv-DYd-XDzkhs-unsplash-1-min.jpg")`,
      }}
    >
      <div className="h-[450px] px-2 md:px-10 lg:px-0 lg:max-w-7xl lg:mx-auto gap-5 flex flex-col justify-center">
        <div className="">
          <h2 className="text-3xl font-bold">{pageName}</h2>
          <h2 className="text-6xl font-bold">{title}</h2>
        </div>
        <p className="text-lg">
          Home / <span className="text-blue-800">{hyperLink}</span>
        </p>
        <hr className="border-[#989BA1]" />
      </div>
    </section>
  );
}
