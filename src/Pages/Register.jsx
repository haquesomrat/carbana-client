import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleSignUp, githubSignUp } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state);

  // set error
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, image, email, password);

    // validate password
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{1,5}|.{7,})$/.test(password)
    ) {
      setError("Use combination of number, capital and special characters");
      toast.error("Invalid Password");
      return;
    } else {
      setError("");

      // create user with email and password
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          const createdAt = res.user?.metadata?.creationTime;
          const lastLoggedInAt = res.user?.metadata?.lastSignInTime;
          const user = {
            name,
            image,
            email,
            // password,
            createdAt: createdAt,
            lastLoggedInAt: lastLoggedInAt,
          };
          fetch(`https://carbana-server.vercel.app/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                toast.success("Account Creation Successful");
                // navigate after registration
                navigate(location?.state ? location.state : "/");
              }
            });

          // update profile
          updateProfile(res.user, {
            displayName: name,
            photoURL: image,
          })
            .then(() => console.log("profile updated"))
            .catch((err) => console.log(err));

          // form.reset();
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${err}`);
        });
    }
  };

  // sign up with google
  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((res) => {
        console.log(res.user);
        const userName = res.user.displayName;
        const userEmail = res.user.email;
        const userImg = res.user.photoURL;
        const createdAt = res.user.metadata.creationTime;
        const lastLoggedInAt = res.user.metadata.lastSignInTime;

        const user = {
          name: userName,
          image: userImg,
          email: userEmail,
          createdAt,
          lastLoggedInAt,
        };
        fetch(`https://carbana-server.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Google Sign Up Successful");
            // navigate after login
            navigate(location?.state ? location.state : "/");
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err}`);
      });
  };

  // sign up with github
  const handleGithubSignUp = () => {
    githubSignUp()
      .then((res) => {
        console.log(res.user);
        const userName = res.user.displayName;
        const userEmail = res.user.email;
        const userImg = res.user.photoURL;
        const createdAt = res.user.metadata.creationTime;
        const lastLoggedInAt = res.user.metadata.lastSignInTime;

        const user = {
          name: userName,
          image: userImg,
          email: userEmail,
          createdAt,
          lastLoggedInAt,
        };
        fetch(`https://carbana-server.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Github Sign Up Successful");
            // navigate after registration
            navigate(location?.state ? location.state : "/");
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err}`);
      });
  };

  return (
    <div className="pt-10">
      <div className="hero min-h-screen bg-base-200 p-3">
        <div className="w-full md:w-8/12 lg:w-5/12 rounded-xl p-4 md:p-6 shadow-2xl bg-base-100 duration-1000">
          <form onSubmit={handleRegister} className="w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Your Photo Link"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
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
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary/80 text-white text-lg hover:bg-primary">
                Register
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
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-primary hover:underline">Login Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
