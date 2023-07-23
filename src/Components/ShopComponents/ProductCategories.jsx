const ProductCategories = ({ name, category, setCategory }) => {
  return (
    <>
      <button
        onClick={(e) => setCategory(e.currentTarget.innerHTML)}
        className={`hover:text-black text-[#CED2DA]  btn join-item pl-0 pr-10 border-none font-bold text-base ${
          category == name ? "text-black" : ""
        }`}
      >
        {name}
      </button>
    </>
  );
};
export default ProductCategories;
