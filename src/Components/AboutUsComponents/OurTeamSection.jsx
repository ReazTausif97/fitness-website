import { NavLink } from "react-router-dom";
import BtnOutline from "../Reuse/BtnOutline";
import SingleTrainer from "../TeamComponents/SingleTrainer";
import { useEffect, useState } from "react";

const OurTeamSection = () => {
  const URL = "data/AllTrainers.json";
  const [trainerDetails, setTrainerDetails] = useState([]);
  useEffect(() => {
    const getTrainer = async (URL) => {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        setTrainerDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrainer(URL);
  }, []);
  return (
    <section className="bg-[#CED2DA] py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-5 items-center">
            <h2 className="text-6xl font-bold">OUR TEAM</h2>
            <p>Our Super Heros who makes you sweat.</p>
          </div>
          <BtnOutline>
            <NavLink to="/Team">VIEW ALL</NavLink>
          </BtnOutline>
        </div>
        <div className="py-10 grid grid-cols-[repeat(4,1fr)]  gap-5 text-white">
          {trainerDetails.slice(0, 4).map((value) => (
            <SingleTrainer
              key={value.id}
              trainerName={value.trainerName}
              Image={value.Image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurTeamSection;
