import { Outlet } from "react-router";
import { Galery } from "../Galery/Galery";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Galery />
      <Outlet />
    </>
  );
};

export default Layout;
