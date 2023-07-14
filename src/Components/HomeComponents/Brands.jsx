import React from "react";
import bellanaija from "../../assets/bellanaija.png";
import Betway from "../../assets/Betway.png";
import Andela from "../../assets/Andela.svg";
function Brands({}) {
  return (
    <section className="flex px-72 py-36">
      <div>
        <div className="flex items-center">
          <i class="cursor-pointer text-4xl fa-solid fa-circle-arrow-left "></i>
          <div className="flex ">
            <div className="flex flex-col items-center">
              <img
                className=" w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
              <img
                className="mt-5 w-1/2"
                src="https://i.ibb.co/GpgJXzK/Betway.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className=" w-1/2"
                src="https://i.ibb.co/GpgJXzK/Betway.png"
                alt=""
              />
              <img
                className="mt-5 w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className=" w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
              <img
                className="mt-5 w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className=" w-1/2"
                src="https://i.ibb.co/GpgJXzK/Betway.png"
                alt=""
              />
              <img
                className="mt-5 w-1/2"
                src="https://i.ibb.co/yR7kzR8/bellanaija.png"
                alt=""
              />
            </div>
          </div>
          <i class="cursor-pointer text-4xl fa-solid fa-circle-arrow-right "></i>
        </div>
      </div>
    </section>
  );
}

export default Brands;
