import { Outlet } from "react-router-dom";
import Menu from "../components/menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
