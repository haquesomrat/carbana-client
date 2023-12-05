import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="font-fira">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

      <Toaster />
    </div>
  );
};

export default Root;
