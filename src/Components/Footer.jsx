import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-3 duration-1000">
        <footer className="footer py-12 text-base-content">
          <nav>
            <header className="footer-title text-primary">Services</header>
            <Link to={"/products"} className="link link-hover">
              Products
            </Link>
            <a className="link link-hover">Blogs</a>
            <a className="link link-hover">Reviews</a>
            <a className="link link-hover">Refund Policy</a>
          </nav>
          <nav>
            <header className="footer-title text-primary">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <Link to={"/addproduct"} className="link link-hover">
              Add Products
            </Link>
          </nav>
          <nav>
            <header className="footer-title text-primary">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer gap-6 py-6 border-t text-base-content border-primary/30">
          <aside className="items-center grid-col text-center mx-auto md:mx-0">
            <Link
              to={"/"}
              className="btn btn-ghost text-2xl mx-auto md:mx-0 md:text-3xl font-bold text-primary hover:bg-transparent p-0"
            >
              Carbana
            </Link>
            <p>Copyright © 2023 - All right reserved by Carbana Pvt. Ltd</p>
          </aside>
          <nav className="mx-auto md:mx-0 md:place-self-center md:justify-self-end">
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary p-2 rounded-full hover:bg-transparent group border border-primary duration-500 ease-out"
              >
                <FaFacebookF className="text-xl text-base-100 group-hover:text-primary duration-500 ease-out" />
              </a>
              <a className="bg-primary p-2 rounded-full hover:bg-transparent group border border-primary  duration-500 ease-out cursor-pointer">
                <FaInstagram className="text-xl text-base-100 group-hover:text-primary  duration-500 ease-out" />
              </a>
              <a className="bg-primary p-2 rounded-full hover:bg-transparent group border border-primary  duration-500 ease-out cursor-pointer">
                <FaXTwitter className="text-xl text-base-100 group-hover:text-primary  duration-500 ease-out" />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
