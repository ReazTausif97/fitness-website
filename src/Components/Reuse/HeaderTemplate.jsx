import React from "react";

export function HeaderTemplate({ pageName, title, hyperLink }) {
  return (
    <section
      className="bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url("https://i.ibb.co/cg7qX1f/victor-freitas-Wv-DYd-XDzkhs-unsplash-1.jpg")`,
      }}
    >
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
    </section>
  );
}
