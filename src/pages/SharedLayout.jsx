import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
