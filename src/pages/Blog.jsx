import BlogContainer from "../Components/BlogComponents/BlogContainer";
import BlogHero from "../Components/BlogComponents/BlogHero";
import HeaderDetails from "../Components/BlogComponents/HeaderDetails";
import SocialMedia from "../Components/Reuse/SocialMedia";

const Blog = () => {
  return (
    <>
      <BlogHero />
      <HeaderDetails />
      <BlogContainer />
      <SocialMedia />
    </>
  );
};
export default Blog;
