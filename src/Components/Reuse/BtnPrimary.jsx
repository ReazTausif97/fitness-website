const BtnPrimary = ({ children }) => {
  return (
    <button className="btn px-10 border-none bg-[#303b6d]  rounded-none  text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
      {children}
    </button>
  );
};
export default BtnPrimary;
