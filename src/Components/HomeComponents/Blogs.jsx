import BtnOutline from "../Reuse/BtnOutline";

const Blogs = () => {
  return (
    <section className="px-72 py-36">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-bold">FROM THE BLOG</h2>
          <BtnOutline> SEE ALL BLOG</BtnOutline>
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
  );
};
export default Blogs;
