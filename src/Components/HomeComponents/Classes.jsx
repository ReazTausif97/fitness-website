import React from "react";
import BtnOutline from "../Reuse/BtnOutline";

function Classes({}) {
  return (
    <section className="px-72 py-36">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-bold">CLASSES</h2>
          <BtnOutline>SEE ALL CLASSES</BtnOutline>
        </div>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-10 py-20">
          <div className="">
            <img
              className="h-[500px] w-full "
              src="https://i.ibb.co/6Z8wDd4/yannic-laderach-Dqx4-XWu-Xu7w-unsplash.jpg"
              alt=""
            />
            <h2 className="font-bold mt-5 text-2xl">ASHTANA YOGA</h2>
            <p className="mt-5">
              Structure, powerful practice that focuses on mastery of poses and
              progression to more advanced levels
            </p>
            <button className="mt-5 text-[#303b6d] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
          <div className="">
            <img
              className="h-[500px] w-full "
              src="https://i.ibb.co/x8DxV5q/alonso-reyes-0-Hl-I76m4jx-U-unsplash.jpg"
              alt=""
            />
            <h2 className="font-bold mt-5 text-2xl">CROSSFIT</h2>
            <p className="mt-5">
              Structure, powerful practice that focuses on mastery of poses and
              progression to more advanced levels
            </p>
            <button className="mt-5 text-[#303b6d] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
          <div className="">
            <div className="h-[500px] w-full flex justify-center items-center overflow-hidden bg-black">
              <img
                className="w-full"
                src="https://i.ibb.co/Y3yLshZ/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.jpg"
                alt=""
              />
            </div>
            <h2 className="font-bold mt-5 text-2xl">STRETCHING</h2>
            <p className="mt-5">
              Structure, powerful practice that focuses on mastery of poses and
              progression to more advanced levels
            </p>
            <button className="mt-5 text-[#303b6d] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
          <div className="">
            <img
              className="h-[500px] w-full"
              src="https://i.ibb.co/41bdFt7/young-fitness-man-studio.jpg"
              alt=""
            />
            <h2 className="font-bold mt-5 text-2xl">CORE</h2>
            <p className="mt-5">
              Structure, powerful practice that focuses on mastery of poses and
              progression to more advanced levels
            </p>
            <button className="mt-5 text-[#303b6d] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
          <div className="">
            <img
              className="h-[500px] w-full"
              src="https://i.ibb.co/K7Y19tW/confident-young-muscular-caucasian-athlete-practicing-gym-with-weights-male-model-doing-strength-exe.jpg"
              alt=""
            />
            <h2 className="font-bold mt-5 text-2xl">BOXING</h2>
            <p className="mt-5">
              Structure, powerful practice that focuses on mastery of poses and
              progression to more advanced levels
            </p>
            <button className="mt-5 text-[#303b6d] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
          <div className="">
            <img
              className="h-[500px] w-full"
              src="https://i.ibb.co/yVGXZgQ/froehliche-starke-sportlehrerin-die-zeigt-wie-training-crossfit-mit-medizinball-auf-der-schulter-lae.jpg"
              alt=""
            />
            <h2 className="font-bold mt-5 text-2xl">CORE</h2>
            <p className="mt-5">
              Structure, powerful practice that focuses on mastery of poses and
              progression to more advanced levels
            </p>
            <button className="mt-5 text-[#303b6d] font-semibold text-sm">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Classes;
