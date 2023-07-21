import { SingleBlog } from "./SingleBlog";
import BtnOutline from "../Reuse/BtnOutline";
import { useEffect, useState } from "react";

const Blogs = () => {
  const URL = "data/AllBlog.json";
  const [blogDetails, setBlogDetails] = useState([]);
  useEffect(() => {
    const getBlog = async (URL) => {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        setBlogDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBlog(URL);
  }, []);
  return (
    <section className="py-36">
      <div className="px-2 md:px-10 lg:max-w-7xl lg:mx-auto  ">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-6xl lg:text-6xl font-bold">
            FROM THE BLOG
          </h2>
          <BtnOutline> SEE ALL BLOG</BtnOutline>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,1fr)] gap-10 py-20">
          {blogDetails.slice(0, 3).map((value) => (
            <SingleBlog
              Image={value.Image}
              key={value.id}
              Tag={value.Tag}
              Date={value.Date}
              Blogtitle={value.Blogtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blogs;
