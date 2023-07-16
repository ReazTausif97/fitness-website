import { HeaderTemplate } from "../Components/Reuse/HeaderTemplate";

const FAQ = () => {
  const pageName = "F.A.Q",
    title = "GIFT CARDS",
    hyperLink = "F.A.Q";

  return (
    <section
      className="bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url("https://i.ibb.co/cg7qX1f/victor-freitas-Wv-DYd-XDzkhs-unsplash-1.jpg")`,
      }}
    >
      <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
    </section>
  );
};
export default FAQ;
