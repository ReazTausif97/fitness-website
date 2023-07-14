const BtnOutline = ({ children }) => {
  return (
    <button className="btn border-2 border-[#303b6d] text-[#303b6d]  rounded-none  hover:text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
      {children}
    </button>
  );
};
export default BtnOutline;
