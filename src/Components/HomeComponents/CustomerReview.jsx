import React from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsStarFill,
  BsStarHalf,
  BsStar,
} from "react-icons/bs";
function CustomerReview({}) {
  return (
    <section className="bg-[#ced2da]  py-36">
      <div className="px-2 md:px-10 lg:max-w-7xl lg:mx-auto">
        <h2
          className="text-center md:text-start lg:text-start font-extrabold
            text-3xl "
        >
          TESTOMONIALS
        </h2>
        <h2 className="text-center md:text-start lg:text-start font-extrabold text-6xl mt-4">
          WHAT MY CLIENT HAVE TO SAY
        </h2>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center lg:gap-20 gap-10 md:gap-20 mt-10">
          <div className="text-center md:text-start lg:text-start md:w-1/2 lg:w-auto">
            <h2 className="text-2xl">Crossfit, Box</h2>
            <div className="flex justify-center md:justify-start lg:justify-start gap-5 text-xl lg:mt-10 md:mt-10 mt-5 ">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </div>
            <p className="mt-10">
              I have worked with Teresa Lowe for a few years now. I absolutely
              love Teresa's energy and how motivating she is. I really
              appreciate her attention and effort she puts in making me feel and
              look great. From the very start, I noticed amazing changes on my
              body, wellbeing and quality of life. I now feel empowered,
              confident and healthy.
            </p>
            <div className=" flex justify-center md:justify-start lg:justify-start gap-5 text-4xl mt-10">
              <BsArrowLeftCircle className=" text-red-500 hover:text-[#ced2da]  hover:bg-red-500 rounded-full" />
              <BsArrowRightCircle className=" text-red-500 hover:text-[#ced2da]  hover:bg-red-500 rounded-full" />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2">
            <img
              className="w-full"
              src="https://i.ibb.co/FbN1Wrn/ludvig-wiese-d-Mf-HM-j-Hwc-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerReview;
