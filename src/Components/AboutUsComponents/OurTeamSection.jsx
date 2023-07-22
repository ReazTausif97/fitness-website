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
    <section className="bg-[#CED2DA] py-16 lg:py-32">
      <div className="px-2 md:px-10 lg:max-w-7xl lg:mx-auto">
        <div className="flex flex-col gap-2 lg:flex-row md:flex-row justify-between">
          <div className="flex flex-col lg:flex-row md:flex-row gap-2 lg:gap-5 md:gap-5 items-center">
            <h2 className="text-4xl lg:text-6xl font-bold">OUR TEAM</h2>
            <p>Our Super Heros who makes you sweat.</p>
          </div>
          <div className="flex justify-center">
            <BtnOutline>
              <NavLink to="/Team">VIEW ALL</NavLink>
            </BtnOutline>
          </div>
        </div>
        <div className="py-10 grid md:grid-cols-[repeat(2,1fr)]  lg:grid-cols-[repeat(4,1fr)]  gap-5 text-white">
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
