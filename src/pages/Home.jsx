import banner from "../assets/banner.png";
import bellanaija from "../assets/bellanaija.png";
import Betway from "../assets/Betway.png";
import Andela from "../assets/Andela.svg";

const Home = () => {
  return (
    <>
      <section>
        <div
          className=" flex px-72 items-center -z-20 h-[750px] w-full bg-cover"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="text-8xl font-extrabold z-10">
            <h2>KRON</h2>
            <h2 className="mt-5">FITNESS</h2>
            <button className="px-10 btn text-white bg-[#303b6d] rounded-none hover:bg-[#5164b9]">
              Get Free Class
            </button>
          </div>
        </div>
      </section>

      <section className=" px-72 py-36 bg-[#ced2da]">
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
            <button className="mt-10 btn border-2 border-[#303b6d] text-[#303b6d]  rounded-none  hover:text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
              LEARN MORE
            </button>
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
      </section>

      <section className="px-72 py-36">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-6xl font-bold">CLASSES</h2>
            <button className="btn border-2 border-[#303b6d] text-[#303b6d]  rounded-none  hover:text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
              SEE ALL CLASSES
            </button>
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
                Structure, powerful practice that focuses on mastery of poses
                and progression to more advanced levels
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
                Structure, powerful practice that focuses on mastery of poses
                and progression to more advanced levels
              </p>
              <button className="mt-5 text-[#303b6d] font-semibold text-sm">
                LEARN MORE
              </button>
            </div>
            <div className="">
              <img
                className="h-[500px] w-full"
                src="https://i.ibb.co/Y3yLshZ/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.jpg"
                alt=""
              />
              <h2 className="font-bold mt-5 text-2xl">STRETCHING</h2>
              <p className="mt-5">
                Structure, powerful practice that focuses on mastery of poses
                and progression to more advanced levels
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
                Structure, powerful practice that focuses on mastery of poses
                and progression to more advanced levels
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
                Structure, powerful practice that focuses on mastery of poses
                and progression to more advanced levels
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
                Structure, powerful practice that focuses on mastery of poses
                and progression to more advanced levels
              </p>
              <button className="mt-5 text-[#303b6d] font-semibold text-sm">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ced2da] px-72 py-36">
        <h2
          className="font-extrabold
            text-3xl "
        >
          TESTOMONIALS
        </h2>
        <h2 className="font-extrabold text-6xl mt-4">
          WHAT MY CLIENT HAVE TO SAY
        </h2>
        <div className="flex mt-10 gap-28">
          <div className="w-1/2">
            <h2 className="text-2xl">Crossfit, Box</h2>
            <div className="flex gap-5 text-xl mt-10 ">
              <i class="fa-solid fa-star text-[#303b6d]"></i>
              <i class="fa-solid fa-star text-[#303b6d]"></i>
              <i class="fa-solid fa-star text-[#303b6d]"></i>
              <i class="fa-solid fa-star text-[#303b6d]"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p className="mt-10">
              I have worked with Teresa Lowe for a few years now. I absolutely
              love Teresa's energy and how motivating she is. I really
              appreciate her attention and effort she puts in making me feel and
              look great. From the very start, I noticed amazing changes on my
              body, wellbeing and quality of life. I now feel empowered,
              confident and healthy.
            </p>

            <i class="text-3xl fa-solid fa-circle-arrow-left mt-10"></i>
            <i class="text-3xl ml-3 fa-solid fa-circle-arrow-right"></i>
          </div>
          <img
            className="w-1/4 "
            src="https://i.ibb.co/FbN1Wrn/ludvig-wiese-d-Mf-HM-j-Hwc-unsplash.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="flex px-72 py-36">
        <div>
          <div className="flex items-center">
            <i class="cursor-pointer text-4xl fa-solid fa-circle-arrow-left "></i>
            <div className="flex ">
              <div className="flex flex-col items-center">
                <img className=" w-1/2" src={`${bellanaija}`} alt="" />
                <img className="mt-5 w-1/2" src={`${Betway}`} alt="" />
              </div>
              <div className="flex flex-col items-center">
                <img className=" w-1/2" src={`${Andela}`} alt="" />
                <img className="mt-5 w-1/2" src={`${bellanaija}`} alt="" />
              </div>
              <div className="flex flex-col items-center">
                <img className=" w-1/2" src={`${bellanaija}`} alt="" />
                <img className="mt-5 w-1/2" src={`${Andela}`} alt="" />
              </div>
              <div className="flex flex-col items-center">
                <img className=" w-1/2" src={`${Betway}`} alt="" />
                <img className="mt-5 w-1/2" src={`${bellanaija}`} alt="" />
              </div>
            </div>
            <i class="cursor-pointer text-4xl fa-solid fa-circle-arrow-right "></i>
          </div>
        </div>
      </section>

      <section
        className="  px-72 py-36  flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3)), url("https://i.ibb.co/K7Y19tW/confident-young-muscular-caucasian-athlete-practicing-gym-with-weights-male-model-doing-strength-exe.jpg")`,
        }}
      >
        <div className=" text-white text-center">
          <h2 className="font-bold text-6xl">JOIN THE CLUB</h2>
          <p className="mt-5">
            City Gym has awesome aminities, the best equipment,
          </p>
          <p>professional stuff and lot more.</p>
          <button className="mt-5 px-10 btn text-white border-none bg-[#303b6d] rounded-none hover:bg-[#5164b9]">
            BECOME A MEMBER
          </button>
        </div>
      </section>

      <section className="px-72 py-36">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-6xl font-bold">FROM THE BLOG</h2>
            <button className="btn border-2 border-[#303b6d] text-[#303b6d]  rounded-none  hover:text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
              SEE ALL BLOG
            </button>
          </div>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-10 py-20">
            <div className="">
              <img
                className="h-[500px] w-full"
                src="https://i.ibb.co/6wJdQjV/athletic-shirtless-young-male-fitness-model-holds-dumbbell-with-light-isolated-dark-background.jpg"
                alt=""
              />
              <div className="items-center mt-5 flex gap-5 text-[#303b6d] font-semibold">
                <p>December 18, 2021</p>
                <i class="text-xs fa-regular fa-circle"></i>
                <p>Fitness</p>
              </div>
              <h2 className="font-bold mt-5 text-2xl">
                EVERYTHING YOU NEED TO KNOW ABOUT FITNESS
              </h2>

              <button className="mt-5 text-[#303b6d]  font-bold text-sm">
                LEARN MORE
              </button>
            </div>
            <div className="">
              <img
                className="h-[500px] w-full "
                src="https://i.ibb.co/x8DxV5q/alonso-reyes-0-Hl-I76m4jx-U-unsplash.jpg"
                alt=""
              />
              <div className="items-center mt-5 flex gap-5 text-[#303b6d] font-semibold">
                <p>December 18, 2021</p>
                <i class="text-xs fa-regular fa-circle"></i>
                <p>Fitness</p>
              </div>
              <h2 className="font-bold mt-5 text-2xl">
                EVERYTHING YOU NEED TO KNOW ABOUT FITNESS
              </h2>

              <button className="mt-5 text-[#303b6d] font-bold text-sm">
                LEARN MORE
              </button>
            </div>
            <div className="">
              <img
                className="h-[500px] w-full"
                src="https://i.ibb.co/41bdFt7/young-fitness-man-studio.jpg"
                alt=""
              />
              <div className="items-center mt-5 flex gap-5 text-[#303b6d] font-semibold">
                <p>December 18, 2021</p>
                <i class="text-xs fa-regular fa-circle"></i>
                <p>Fitness</p>
              </div>
              <h2 className="font-bold mt-5 text-2xl">
                EVERYTHING YOU NEED TO KNOW ABOUT FITNESS
              </h2>

              <button className="mt-5 text-[#303b6d]  font-bold text-sm">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-72 py-36 bg-[#05060A]">
        <div>
          <div className="flex justify-between text-white  items-center">
            <h2 className="text-6xl font-bold">INSTAGRAM</h2>

            <button className="btn px-10 border-none bg-[#303b6d]  rounded-none  text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
              FOLLOW INSTAGRAM
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
