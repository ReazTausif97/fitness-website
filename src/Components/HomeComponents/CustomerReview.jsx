import React from "react";
function CustomerReview({}) {
  return (
    <section className="bg-[#ced2da] px-72 py-36">
      <h2
        className="font-extrabold
            text-3xl "
      >
        TESTOMONIALS
      </h2>
      <h2 className="font-extrabold text-6xl mt-4">
        WHAT MY CLIENT HAVE TO SAY
      </h2>
      <div className="flex mt-10 gap-28">
        <div className="w-1/2">
          <h2 className="text-2xl">Crossfit, Box</h2>
          <div className="flex gap-5 text-xl mt-10 ">
            <i class="fa-solid fa-star text-[#303b6d]"></i>
            <i class="fa-solid fa-star text-[#303b6d]"></i>
            <i class="fa-solid fa-star text-[#303b6d]"></i>
            <i class="fa-solid fa-star text-[#303b6d]"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="mt-10">
            I have worked with Teresa Lowe for a few years now. I absolutely
            love Teresa's energy and how motivating she is. I really appreciate
            her attention and effort she puts in making me feel and look great.
            From the very start, I noticed amazing changes on my body, wellbeing
            and quality of life. I now feel empowered, confident and healthy.
          </p>

          <i class="text-3xl fa-solid fa-circle-arrow-left mt-10"></i>
          <i class="text-3xl ml-3 fa-solid fa-circle-arrow-right"></i>
        </div>
        <img
          className="w-1/4 "
          src="https://i.ibb.co/FbN1Wrn/ludvig-wiese-d-Mf-HM-j-Hwc-unsplash.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default CustomerReview;
