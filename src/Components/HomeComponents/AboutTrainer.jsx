import BtnOutline from "../Reuse/BtnOutline";

const AboutTrainer = () => {
  return (
    <section className="py-36 bg-[#ced2da]">
      <div className=" max-w-7xl mx-auto">
        <div className="flex">
          <img
            className="w-1/3"
            src="https://i.ibb.co/WsCBcVR/filip-mroz-C3-Qs4-Mbxe-KY-unsplash.jpg"
            alt=""
          />
          <div className="w-3/5 px-10 py-20">
            <h3 className="font-extrabold text-3xl">ABOUT</h3>
            <h1 className="mt-5 font-extrabold text-6xl">BROOKLYN SIMMONS</h1>
            <h2 className="font-bold mt-10 text-2xl">Crossfit, Box</h2>
            <div className="flex gap-2 text-2xl mt-10">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-telegram"></i>
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
        <div className="flex mt-20 justify-evenly  items-center">
          <div className="flex flex-col justify-center items-center">
            <i class="text-6xl fa-solid text-[#303b6d] fa-award "></i>
            <h2 className="mt-5 text-xl font-bold">7 YEAR OF EXPERIENCE</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i class="text-6xl fa-solid text-[#303b6d] fa-hand-fist"></i>
            <h2 className="mt-5 text-xl font-bold">RESULTS GUARANTEED</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i class="text-6xl fa-solid text-[#303b6d] fa-clipboard-list "></i>
            <h2 className="mt-5 text-xl font-bold">PERSONAL PROGRAM</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i class="text-6xl fa-solid text-[#303b6d] fa-people-group "></i>
            <h2 className="mt-5 text-xl font-bold">GROUP LESSON</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTrainer;
