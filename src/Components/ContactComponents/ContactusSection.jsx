import BtnPrimary from "../Reuse/BtnPrimary";

const ContactusSection = () => {
  return (
    <section className="mt-10 py-16 lg:py-32">
      <div className="px-2 md:px-10 lg:px-0 lg:max-w-7xl lg:mx-auto flex flex-col gap-14">
        <h2 className="text-6xl font-bold">CONTACT US</h2>
        <div className="flex flex-col lg:flex-row md:flex-row w-full gap-10">
          <div className="form-control  w-full ">
            <input
              type="text"
              placeholder="Name *"
              className="input input-bordered rounded-none focus:outline-none w-full placeholder-[#303B6D] border-[#CED2DA] "
            />
          </div>
          <div className="form-control  w-full ">
            <input
              type="text"
              placeholder="Email *"
              className="input input-bordered rounded-none focus:outline-none w-full  placeholder-[#303B6D] border-[#CED2DA] "
            />
          </div>
        </div>
        <textarea
          placeholder="Comment *"
          className="textarea textarea-bordered rounded-none focus:outline-none textarea-lg w-full h-[200px] placeholder-[#303B6D] border-[#CED2DA] "
        ></textarea>
        <div>
          <BtnPrimary>Send Message</BtnPrimary>
        </div>
      </div>
    </section>
  );
};
export default ContactusSection;
