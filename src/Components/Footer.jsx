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
        <footer className="footer py-6 border-t text-base-content border-base-300">
          <aside className="items-center grid-col text-center">
            <Link
              to={"/"}
              className="btn btn-ghost text-2xl md:text-3xl xl:text-4xl font-bold text-primary hover:bg-transparent p-0"
            >
              Carbana
            </Link>
            <p>Copyright © 2023 - All right reserved by Carbana Pvt. Ltd</p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a
                href="#"
                className="bg-primary p-2 rounded-full hover:bg-[#fd9651]"
              >
                <FaFacebookF className="text-xl text-base-100 " />
              </a>
              <a className="bg-primary p-2 rounded-full hover:bg-[#fd9651]">
                <FaInstagram className="text-xl text-base-100" />
              </a>
              <a className="bg-primary p-2 rounded-full hover:bg-[#fd9651]">
                <FaXTwitter className="text-xl text-base-100" />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
