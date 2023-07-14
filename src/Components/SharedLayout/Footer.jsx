import { NavLink } from "react-router-dom";
import BtnPrimary from "../Reuse/BtnPrimary";

const Footer = () => {
  return (
    <footer className="bg-[#CED2DA] grid grid-cols-[1fr,1fr,1fr,2fr,2fr] gap-5 px-72 py-36  justify-evenly">
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold text-xl">KRON</h2>

        <div className="flex items-center gap-2 ">
          <i class=" text-xl fa-solid fa-phone" />
          <p>(201) 555-0124</p>
        </div>

        <div className="flex items-center gap-2">
          <i class=" text-xl fa-solid fa-envelope"></i>
          <p>kronfitness@gmail.com</p>
        </div>

        <div className="flex items-center gap-2">
          <i class=" text-xl fa-solid fa-location-dot"></i>
          <p>285 Great North Road, Grey Lynn, Aucklan 1021</p>
        </div>
        <div className="flex gap-2 text-xl">
          <i class="cursor-pointer fa-brands fa-twitter"></i>
          <i class="cursor-pointer fa-brands fa-facebook"></i>
          <i class="cursor-pointer fa-brands fa-instagram"></i>
          <i class="cursor-pointer fa-brands fa-telegram"></i>
          <i class="cursor-pointer fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold text-xl">COMPANY</h2>
        <NavLink to={"/AboutUs"}>AboutUs</NavLink>
        <p className="cursor-pointer">Service</p>
        <p className="cursor-pointer">Case Studies</p>
        <NavLink to={"/Blog"}>Blog</NavLink>
        <NavLink to={"/Contacts"}>Contacts</NavLink>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold text-xl">PRODUCT HELP</h2>
        <p className="cursor-pointer">FAQ</p>
        <p className="cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Support</p>
        <p className="cursor-pointer">Terms & Conditions</p>
        <p className="cursor-pointer">Carrers</p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold text-xl">RECENT NEWS</h2>
        <div className="flex gap-2">
          <div
            className="bg-cover bg-center h-[50px] w-[50px] rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/ZKkxNnX/samuel-girven-VJ2s0c20q-Co-unsplash.jpg')",
            }}
          ></div>
          <div>
            <h2 className="cursor-pointer">PREPARING THE GARDEN</h2>
            <p>19 July, 2022</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className="bg-cover bg-center h-[50px] w-[50px] rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/ZKkxNnX/samuel-girven-VJ2s0c20q-Co-unsplash.jpg')",
            }}
          ></div>
          <div>
            <h2 className="cursor-pointer">PREPARING THE GARDEN</h2>
            <p>19 July, 2022</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className="bg-cover bg-center h-[50px] w-[50px] rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/ZKkxNnX/samuel-girven-VJ2s0c20q-Co-unsplash.jpg')",
            }}
          ></div>
          <div>
            <h2 className="cursor-pointer">PREPARING THE GARDEN</h2>
            <p>19 July, 2022</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold text-xl">SUBSCRIBE NEWSLETTER</h2>

        <div>
          <input
            className="pl-5 pr-10 py-3"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <BtnPrimary>SUBSCRIBE</BtnPrimary>
        </div>
        <p>Get latest updates and offers</p>
      </div>
    </footer>
  );
};
export default Footer;
