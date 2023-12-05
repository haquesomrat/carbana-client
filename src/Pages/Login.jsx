import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleSignUp, githubSignUp } = useContext(AuthContext);

  // set error
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in with email and password
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully logged in");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setError(`${err}`);
        toast.error("Invalid Email/Password");
      });
  };

  // sign up with google
  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully logged in");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  // sign up with github
  const handleGithubSignUp = () => {
    githubSignUp()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully logged in");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 p-3">
        <div className="w-full md:w-8/12 lg:w-5/12 rounded-xl p-4 md:p-6 shadow-2xl bg-base-100 duration-1000">
          <form onSubmit={handleLogin} className="w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary/80 text-white text-lg hover:bg-primary">
                Login
              </button>
            </div>
            <p className="text-error text-lg text-center pt-6">{error}</p>
          </form>
          <p className="divider pt-6">Or Continue With</p>
          <div className="flex flex-col md:flex-row justify-around items-center gap-4 py-4">
            <button
              onClick={handleGoogleSignUp}
              className="btn btn-sm bg-base-300 rounded-full w-fit"
            >
              <FcGoogle className="text-2xl" />
              Google
            </button>
            <button
              onClick={handleGithubSignUp}
              className="btn btn-sm bg-base-300 rounded-full w-fit"
            >
              <FaGithub className="text-2xl" />
              Github
            </button>
          </div>
          <p className="text-center">
            New to the site?{" "}
            <Link to={"/register"}>
              <span className="text-primary hover:underline">Register Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
