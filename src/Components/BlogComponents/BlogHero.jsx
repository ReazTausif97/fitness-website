import { HeaderTemplate } from "../Reuse/HeaderTemplate";

const BlogHero = () => {
  const pageName = "Blog",
    title = "OUR NEWS",
    hyperLink = "Blog";
  return (
    <HeaderTemplate pageName={pageName} title={title} hyperLink={hyperLink} />
  );
};
export default BlogHero;
