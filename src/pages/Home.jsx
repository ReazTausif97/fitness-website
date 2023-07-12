import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <>
      <h2>home</h2>

      <div
        className="h-[600px] w-screen bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
    </>
  );
};
export default Home;
