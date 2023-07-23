import { useEffect, useState } from "react";
import { SingleBlog } from "../HomeComponents/SingleBlog";

const BlogList = () => {
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
    <section>
      <div className="">
        <div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-10 py-10">
          {blogDetails.map((value) => (
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
export default BlogList;
