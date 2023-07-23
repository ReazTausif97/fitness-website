import { useEffect, useState } from "react";
import SingleTrainer from "./SingleTrainer";

const TrainersList = () => {
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
    <div className="py-10 grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)]  gap-5">
      {trainerDetails.map((value) => (
        <SingleTrainer
          key={value.id}
          trainerName={value.trainerName}
          Image={value.Image}
        />
      ))}
    </div>
  );
};
export default TrainersList;
