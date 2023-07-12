import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex gap-3 px-48 py-10 justify-end">
        <NavLink to={"/"}>KRON</NavLink>
        <NavLink to={"/Contacts"}>Contacts</NavLink>
        <NavLink to={"/AboutUs"}>AboutUs</NavLink>
        <NavLink to={"/Faq"}>Faq</NavLink>
        <NavLink to={"/Membership"}>Membership</NavLink>
        <NavLink to={"/Team"}>Team</NavLink>
        <NavLink to={"/Blog"}>Blog</NavLink>
        <NavLink to={"/Shop"}>Shop</NavLink>
      </nav>
    </>
  );
};
export default NavBar;
