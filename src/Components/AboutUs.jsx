import { FaCar } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center container mx-auto px-3 my-10 lg:my-20 gap-6 xl:gap-20 duration-1000">
      <div>
        <figure className="aspect-square sm:aspect-auto lg:aspect-square duration-700">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/WPVyRKf/about-us.webp"
            alt="about us image"
          />
        </figure>
      </div>
      <div className="text-center sm:text-left space-y-6 lg:space-y-6 xl:space-y-10">
        <h2 className="text-3xl lg:text-4xl xl:text-[44px] text-primary font-semibold">
          About Us
        </h2>
        <p className="text-xl md:text-3xl lg:text-3xl max-w-md">
          Provide you the best car according to your choice
        </p>
        <p className="text-nuetral text-sm md:text-base xl:text-lg">
          Ensure your vehicle is always performing at its best with Carbana
          Private Limited. Enhance your ownership experience by exploring every
          part and accessory that was made to fit the exact specifications of
          your Car.
        </p>
        <ul className="space-y-4 max-w-xs mx-auto md:mx-0">
          <li className="flex items-center gap-4 lg:text-lg xl:text-xl">
            <FaCar className="text-primary" />{" "}
            <span>Quality Cars at Guaranteed Prices</span>
          </li>
          <li className="flex items-center gap-4 lg:text-lg xl:text-xl">
            <FaCar className="text-primary" />{" "}
            <span>Routine Service Available</span>
          </li>
          <li className="flex items-center gap-4 lg:text-lg xl:text-xl">
            <FaCar className="text-primary" />{" "}
            <span>Best Car Collections of the Country</span>
          </li>
        </ul>
        <div>
          <button className="btn bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary md:text-lg">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
