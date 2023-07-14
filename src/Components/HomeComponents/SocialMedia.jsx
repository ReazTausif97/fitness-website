import BtnPrimary from "../Reuse/BtnPrimary";

const SocialMedia = () => {
  return (
    <section className="px-72 py-36 bg-[#05060A]">
      <div>
        <div className="flex justify-between text-white  items-center">
          <h2 className="text-6xl font-bold">INSTAGRAM</h2>

          <BtnPrimary>FOLLOW INSTAGRAM</BtnPrimary>
        </div>

        <div className="grid grid-cols-[1fr,2fr,1fr] gap-5 py-20 ">
          <div
            className="h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/6XzNfzw/photo-1483721310020-03333e577078.jpg")',
            }}
          >
            {/* <img
              className="h-[500px] "
              src="https://i.ibb.co/6XzNfzw/photo-1483721310020-03333e577078.jpg"
              alt=""
            /> */}
          </div>
          <div
            className="h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/p1Nm6wZ/kike-vega-F2qh3yjz6-Jk-unsplash.jpg")',
            }}
          >
            {/* <img
              className="h-[500px] w-full "
              src="https://i.ibb.co/p1Nm6wZ/kike-vega-F2qh3yjz6-Jk-unsplash.jpg"
              alt=""
            /> */}
          </div>
          <div
            className="h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/rv1tkKW/71oqw-Pp-TOYL-AC-SX679.jpg")',
            }}
          >
            {/* <img
              className=" "
              src="https://i.ibb.co/rv1tkKW/71oqw-Pp-TOYL-AC-SX679.jpg"
              alt=""
            /> */}
          </div>

          <div
            className="h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/RSS2Xd9/madison-lavern-4gcq-Rf3-f2-I-unsplash.jpg")',
            }}
          >
            {/* <img
              className="h-[500px] w-full"
              src="https://i.ibb.co/RSS2Xd9/madison-lavern-4gcq-Rf3-f2-I-unsplash.jpg"
              alt=""
            /> */}
          </div>
          <div
            className="h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/mDQZ4v3/The-view-from-the-back-of-a-woman-meditating-in-lotus-position-980x1139.jpg")',
            }}
          >
            {/* <img
              className="h-[500px] w-full  "
              src="https://i.ibb.co/mDQZ4v3/The-view-from-the-back-of-a-woman-meditating-in-lotus-position-980x1139.jpg"
              alt=""
            /> */}
          </div>
          <div
            className="h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/f0Gddsx/emily-sea-coi-WR0g-T8-Cw-unsplash.jpg")',
            }}
          >
            {/* <img
              className=" "
              src="https://i.ibb.co/f0Gddsx/emily-sea-coi-WR0g-T8-Cw-unsplash.jpg"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SocialMedia;
