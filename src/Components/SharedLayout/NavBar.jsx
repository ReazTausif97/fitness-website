import { NavLink } from "react-router-dom";
import BtnOutline from "../Reuse/BtnOutline";
import BtnPrimary from "../Reuse/BtnPrimary";

const NavBar = () => {
  return (
    <>
      <div className=" w-full py-10 absolute">
        <div className="flex gap-2 items-center w-full justify-between lg:px-0 px-2 md:px-10 md:justify-between lg:justify-between lg:max-w-7xl lg:mx-auto">
          <div className="flex  items-center">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn pl-0 md:pl-0 btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow-2xl shadow-black-500/40 bg-white rounded-box w-52"
              >
                <li>
                  <NavLink to={"/Contacts"}>Contacts</NavLink>
                </li>
                <li>
                  <NavLink to={"/AboutUs"}>AboutUs</NavLink>
                </li>
                <li>
                  <NavLink to={"/Faq"}>Faq</NavLink>
                </li>
                <li>
                  <NavLink to={"/Membership"}>Membership</NavLink>
                </li>
                <li>
                  <NavLink to={"/Team"}>Team</NavLink>
                </li>
                <li>
                  <NavLink to={"/Blog"}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to={"/Shop"}>Shop</NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              <NavLink className="font-extrabold text-3xl" to={"/"}>
                KRON
              </NavLink>
            </div>
          </div>

          <div className="hidden lg:flex lg:gap-3">
            <NavLink to={"/Contacts"}>Contacts</NavLink>
            <NavLink to={"/AboutUs"}>AboutUs</NavLink>
            <NavLink to={"/Faq"}>Faq</NavLink>
            <NavLink to={"/Membership"}>Membership</NavLink>
            <NavLink to={"/Team"}>Team</NavLink>
            <NavLink to={"/Blog"}>Blog</NavLink>
            <NavLink to={"/Shop"}>Shop</NavLink>
          </div>
          <div className="flex">
            <i className="fa-solid fa-user"></i>
            <i className="ml-1 lg:ml-3 md:ml-3 fa-solid fa-cart-shopping"></i>
          </div>
          <div className="flex">
            <BtnOutline>BUY MEMBERSHIP</BtnOutline>
            <button className="btn px-0  border-none bg-[#303b6d]  rounded-none  text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
              BOOK CLASS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
