import BtnPrimary from "../Reuse/BtnPrimary";

const ContactusSection = () => {
  return (
    <section className="mt-10 p-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <h2 className="text-6xl font-bold">CONTACT US</h2>
        <div className="flex w-full gap-10">
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
