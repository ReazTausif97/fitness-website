const Blog = () => {
  return (
    <>
      <section
        className="bg-cover bg-center "
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url("https://i.ibb.co/cg7qX1f/victor-freitas-Wv-DYd-XDzkhs-unsplash-1.jpg")`,
        }}
      >
        <div className="h-[400px] max-w-7xl mx-auto flex flex-col justify-center">
          <div>
            <h2 className="text-3xl font-bold">Blog</h2>
            <h2 className="text-6xl font-bold">Our News</h2>
          </div>
          <p className="text-lg">
            Home / <span className="text-blue-800">Blog</span>
          </p>
          <hr className="border-[#989BA1]" />
        </div>
      </section>
    </>
  );
};
export default Blog;
