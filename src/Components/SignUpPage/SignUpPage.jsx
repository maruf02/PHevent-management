import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUpPage = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("ImageURL");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, image, email, password);
    //   create user
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="py-20">
      <div className="hero ">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-orange-400 ">
          <p className="py-5 text-center text-4xl text-blue-600 font-semibold">
            Please Sign UP
          </p>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-blue-600 font-semibold">
                  Name:
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered bg-white text-black text-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-blue-600 font-semibold">
                  ImageURL:
                </span>
              </label>
              <input
                type="text"
                name="ImageURL"
                placeholder="Enter Your Image URL/Link"
                className="input input-bordered bg-white text-black text-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-blue-600 font-semibold">
                  Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered bg-white text-black text-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-blue-600">
                  Password:
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered bg-white text-black text-xl"
                required
              />
              <label className="pt-2">
                <p className="text-xl text-blue-600">
                  Already SignUP? Please
                  <Link
                    to="/signIn"
                    className="text-purple-700 underline hover:text-green-700"
                  >
                    SignIn
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-2xl">SIGNUP</button>
            </div>
          </form>
          <p className="text-2xl text-blue-600 text-center">SignUp Via:</p>
          {/* google and github */}
          <div className="pb-10 mx-auto flex gap-5  ">
            <div className=" mt-6 flex ">
              <button className="btn btn-primary text-xl">
                <FaGoogle></FaGoogle> Google
              </button>
            </div>
            <div className=" mt-6 flex ">
              <button className="btn btn-primary text-xl">
                <FaGithub></FaGithub> Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
