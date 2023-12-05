import errorImg from "../assets/404-img.png";
import Navbar from "../Components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>

      <figure className="container mx-auto flex justify-center items-center pt-40 px-3 h-screen">
        <img src={errorImg} alt="404 Page not found" />
      </figure>
    </div>
  );
};

export default ErrorPage;
