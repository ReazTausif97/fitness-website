import SingleClass from "./SingleClass";
import React, { useEffect, useState } from "react";
import BtnOutline from "../Reuse/BtnOutline";
function Classes({}) {
  const URL = "data/AllClass.json";
  const [classesDetails, setClassesDetails] = useState([]);
  useEffect(() => {
    const getClass = async (URL) => {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        console.log(data);
        setClassesDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getClass(URL);
  }, []);
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
