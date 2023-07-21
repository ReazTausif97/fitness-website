import BtnOutline from "../Reuse/BtnOutline";

const AboutTrainer = () => {
  return (
    <section className="py-5 md:py-16 lg:py-36 bg-[#ced2da]">
      <div className="px-2 md:px-10 lg:max-w-7xl lg:mx-auto">
        <div className="flex-col gap-5 text-center md:text-start lg:text-start md:flex md:flex-row lg:flex lg:flex-row">
          <img
            className="md:w-1/2  lg:w-1/3"
            src="https://i.ibb.co/WsCBcVR/filip-mroz-C3-Qs4-Mbxe-KY-unsplash.jpg"
            alt=""
          />
          <div className="lg:w-3/5 py-20">
            <h3 className="font-extrabold text-3xl">ABOUT</h3>
            <h1 className="mt-5 font-extrabold text-6xl">BROOKLYN SIMMONS</h1>
            <h2 className="font-bold mt-10 text-2xl">Crossfit, Box</h2>
            <div className="flex justify-center  md:justify-start lg:justify-start gap-2 text-2xl mt-10">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
            <h2 className="mt-10">
              Hi, My name is Teresa Lowe and I know all about healthy lifestyle.
              I also know how to motivate people as I am certified psychologist,
              nutrisionist and personal trainer. My program has already helped
              10k+ people . Join my team and see results in two weeks. Money
              back guarantee.
            </h2>
            <div className="mt-10">
              <BtnOutline>LEARN MORE</BtnOutline>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 gap-2 md:flex md:mt-20 md:justify-evenly lg:flex lg:mt-20 lg:justify-evenly">
          <div className="flex flex-col  text-center">
            <i className="text-6xl fa-solid text-[#303b6d] fa-award "></i>
            <h2 className="mt-5 text-xl font-bold">7 YEAR OF EXPERIENCE</h2>
          </div>
          <div className="flex flex-col text-center">
            <i className="text-6xl fa-solid text-[#303b6d] fa-hand-fist"></i>
            <h2 className="mt-5 text-xl font-bold">RESULTS GUARANTEED</h2>
          </div>
          <div className="flex flex-col text-center">
            <i className="text-6xl fa-solid text-[#303b6d] fa-clipboard-list "></i>
            <h2 className="mt-5 text-xl font-bold">PERSONAL PROGRAM</h2>
          </div>
          <div className="flex flex-col text-center">
            <i className="text-6xl fa-solid text-[#303b6d] fa-people-group "></i>
            <h2 className="mt-5 text-xl font-bold">GROUP LESSON</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTrainer;
