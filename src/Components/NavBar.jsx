import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="flex gap-2 px-48 py-10  items-center justify-around">
        <div>
          <NavLink className="font-extrabold text-2xl" to={"/"}>
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
          <button className="btn rounded-none">BUY MEMBERSHIP</button>
          <button className="ml-3  btn rounded-none">BOOK CLASS</button>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
