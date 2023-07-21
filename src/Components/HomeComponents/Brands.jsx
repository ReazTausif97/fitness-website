import React from "react";
function Brands({}) {
  return (
    <section className="py-36">
      <div className="px-2 md:px-10 lg:max-w-7xl lg:mx-auto ">
        <div className="flex items-center">
          <i className="cursor-pointer text-2xl md:text-4xl lg:text-4xl fa-solid fa-circle-arrow-left "></i>
          <div className="flex ">
            <div className="flex flex-col items-center">
              <img
                className=" w-11/12 md:w-4/5 lg:w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
              <img
                className="mt-5 w-11/12 md:w-4/5 lg:w-1/2"
                src="https://i.ibb.co/GpgJXzK/Betway.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className=" w-11/12 md:w-4/5 lg:w-1/2"
                src="https://i.ibb.co/GpgJXzK/Betway.png"
                alt=""
              />
              <img
                className="mt-5 w-11/12 md:w-4/5 lg:w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className=" w-11/12 md:w-4/5 lg:w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
              <img
                className="mt-5 w-11/12 md:w-4/5 lg:w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className=" w-11/12 md:w-4/5 lg:w-1/2"
                src="https://i.ibb.co/GpgJXzK/Betway.png"
                alt=""
              />
              <img
                className="mt-5 w-11/12 md:w-4/5 lg:w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
            </div>
          </div>
          <i className="cursor-pointer text-2xl md:text-4xl lg:text-4xl fa-solid fa-circle-arrow-right "></i>
        </div>
      </div>
    </section>
  );
}

export default Brands;
