import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <div className="md:w-4/5 mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </>
  );
};
export default Root;
