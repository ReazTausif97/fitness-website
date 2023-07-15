import { NavLink } from "react-router-dom";
import BtnOutline from "../Reuse/BtnOutline";
import BtnPrimary from "../Reuse/BtnPrimary";

const NavBar = () => {
  return (
    <>
      <nav className=" py-10 w-full absolute   top-0">
        <div className="flex   justify-between gap-2 items-center max-w-7xl mx-auto">
          <div>
            <NavLink className="font-extrabold text-3xl" to={"/"}>
              KRON
            </NavLink>
          </div>
          <div className="flex gap-3">
            <NavLink to={"/Contacts"}>Contacts</NavLink>
            <NavLink to={"/AboutUs"}>AboutUs</NavLink>
            <NavLink to={"/Faq"}>Faq</NavLink>
            <NavLink to={"/Membership"}>Membership</NavLink>
            <NavLink to={"/Team"}>Team</NavLink>
            <NavLink to={"/Blog"}>Blog</NavLink>
            <NavLink to={"/Shop"}>Shop</NavLink>
          </div>
          <div>
            <i class="fa-solid fa-user"></i>
            <i class="ml-3 fa-solid fa-cart-shopping"></i>
          </div>
          <div>
            <BtnOutline>BUY MEMBERSHIP</BtnOutline>
            <button className="btn ml-3 px-10 border-none bg-[#303b6d]  rounded-none  text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
              BOOK CLASS
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
