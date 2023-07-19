const SingleTrainer = ({ trainerName, Image }) => {
  return (
    <div>
      <div
        className="filter-[grayscale-1] relative grayscale-[1] w-full bg-center bg-cover h-[400px]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3)),url(${Image})`,
        }}
      >
        <h2 className="absolute px-2 left-0 bottom-0 font-bold">
          {trainerName}
        </h2>
      </div>
    </div>
  );
};
export default SingleTrainer;
