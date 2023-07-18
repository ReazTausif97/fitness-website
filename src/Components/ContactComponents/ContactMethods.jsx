import { PiPhoneCallLight } from "react-icons/pi";
import { TfiEmail, TfiMapAlt } from "react-icons/tfi";

const ContactMethods = () => {
  return (
    <section className="max-w-7xl mx-auto flex gap-10 items-center justify-evenly h-[400px]">
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-2xl font-bold">TELEPHONE</h2>
        <PiPhoneCallLight className="text-7xl text-[#303B6D]" />
        <div>
          <p>(684) 555-0102 </p>
          <p>(480) 555-0103</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-2xl font-bold">EMAIL</h2>
        <TfiEmail className="text-7xl text-[#303B6D]" />
        <div>
          <p>binhan628gmail.com</p>
          <p>trungkienspktnd@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-2xl font-bold">MAIN LOCATION</h2>
        <TfiMapAlt className="text-7xl text-[#303B6D]" />
        <div>
          <p>Glendale Store Front</p>
          <p>Pasadena Warehouse</p>
        </div>
      </div>
    </section>
  );
};
export default ContactMethods;
