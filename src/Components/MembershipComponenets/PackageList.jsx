const PackageList = ({
  packageName,
  packageDescription,
  price,
  show,
  setShow,
}) => {
  //   const [show, setShow] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShow(show === packageName ? "" : packageName)}
        className="flex flex-col gap-4 border-b border-[#67696D] pb-4 cursor-pointer"
      >
        <h2 className="font-bold text-xl lg:text-2xl">{packageName}</h2>
        {show === packageName && (
          <div className="flex items-center justify-between ease-in-out">
            <p className="lg:text-lg w-4/5">{packageDescription}</p>
            <h2 className="font-bold text-[#D70037] sm:text-lg lg:text-xl">{`$ ${price}`}</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default PackageList;
