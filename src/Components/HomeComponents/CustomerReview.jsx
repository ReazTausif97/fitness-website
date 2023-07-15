import React from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsStarFill,
  BsStarHalf,
  BsStar,
} from "react-icons/Bs";
function CustomerReview({}) {
  return (
    <section className="bg-[#ced2da]  py-36">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-extrabold
            text-3xl "
        >
          TESTOMONIALS
        </h2>
        <h2 className="font-extrabold text-6xl mt-4">
          WHAT MY CLIENT HAVE TO SAY
        </h2>
        <div className="flex items-center gap-20 mt-10">
          <div className="">
            <h2 className="text-2xl">Crossfit, Box</h2>
            <div className="flex gap-5 text-xl mt-10 ">
              <BsStarFill className="" />
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
            <div className=" flex gap-5 text-4xl mt-10">
              <BsArrowLeftCircle className=" text-red-500 hover:text-[#ced2da]  hover:bg-red-500 rounded-full" />
              <BsArrowRightCircle className=" text-red-500 hover:text-[#ced2da]  hover:bg-red-500 rounded-full" />
            </div>
          </div>
          <div className="w-1/2">
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
