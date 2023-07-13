import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="flex gap-2 px-72 py-10 items-center absolute w-full top-0 justify-between">
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
          <button className="px-10 btn border-2 border-[#303b6d] text-[#303b6d]  rounded-none  hover:text-white hover:bg-[#5164b9] hover:border-[#5164b9]">
            BUY MEMBERSHIP
          </button>
          <button className="ml-3 text-white bg-[#303b6d] hover:bg-[#5164b9] border-none btn rounded-none">
            BOOK CLASS
          </button>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
