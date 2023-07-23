import { useEffect, useState } from "react";
import PackageList from "./PackageList";

const MembershipPricing = () => {
  const [show, setShow] = useState("");
  const URL = "data/AllPackages.json";
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const getPackage = async () => {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        setPackages(data);
      } catch (error) {
        alert(error);
      }
    };
    getPackage();
  }, []);
  return (
    <section className="bg-[#CED2DA]">
      <div className="px-2 md:px-10 lg:px-0 lg:max-w-7xl lg:mx-auto py-16 lg:py-32">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">PRICING</h2>
          <h2 className="text-4xl lg:text-6xl font-bold">
            CHOOSE YOUR MEMBERSHIP
          </h2>
        </div>
        <div className="flex flex-col gap-4 md:gap-7 lg:gap-7 mt-10 ">
          {packages.map((value) => (
            <PackageList
              key={value.pkId}
              packageName={value.packageName}
              packageDescription={value.packageDescription}
              price={value.price}
              setShow={setShow}
              show={show}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MembershipPricing;
