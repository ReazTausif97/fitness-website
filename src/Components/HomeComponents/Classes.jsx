import SingleClass from "./SingleClass";
import React from "react";
import { classesDetails } from "../../Data";
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
          {classesDetails.map((value) => (
            <SingleClass
              key={value.id}
              Image={value.Image}
              Details={value.Details}
              Classtitle={value.Classtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Classes;
