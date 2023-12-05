// import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands/Brands";
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/Testimonials/Testimonials";
// import Contact from "../Components/Contact";

const Home = () => {
  //   const cars = useLoaderData();
  //   console.log(cars);
  return (
    <div className="pt-[91px]">
      <Hero></Hero>
      <Brands></Brands>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      {/* <Contact></Contact> */}
    </div>
  );
};

export default Home;
