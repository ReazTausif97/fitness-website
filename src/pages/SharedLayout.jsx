import { Outlet } from "react-router-dom";
import NavBar from "../Components/SharedLayout/NavBar";
import Footer from "../Components/SharedLayout/Footer";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
