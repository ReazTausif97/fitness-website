const SingleProduct = ({
  Image,
  productBadge,
  ProductName,
  regularPrice,
  discountPrice,
}) => {
  return (
    // style={{ backgroundImage: `url(${Image})` }}
    <div>
      <div className=" h-[400px] overflow-hidden bg-white">
        <img className="" src={Image} alt="" />
      </div>
      <h2 className="text-center font-bold mt-5 text-2xl">{ProductName}</h2>
      <div className="items-center justify-center mt-5 flex gap-3 text-[#303b6d] font-semibold">
        <p className="text-[#D70037] line-through">${regularPrice}</p>
        <i class="text-xs fa-regular fa-circle"></i>
        <p ca>{discountPrice}</p>
      </div>
    </div>
  );
};
export default SingleProduct;
