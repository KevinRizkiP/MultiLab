import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Logins = () => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUserame(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const { isAuthorized } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandle = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    dispatch(signInUser(user));
    setUserame("");
    setPassword("");
  };

  useEffect(() => {
    if (isAuthorized) {
      navigate("/dashboard");
    } else {
      localStorage.clear();
    }
  }, [isAuthorized]);

  return (
    <div className="w-full bg-cover h-full bg-gradient-to-bl from-gray-700 via-gray-900 to-black justify-center items-center">
      <section className="max-w-7xl mx-auto justify-center items-center ">
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-full mx-auto justify-center items-center px-6 lg:px-0">
            <img
              src="/IMG/logoall.png"
              className="mx-auto items-center justify-center mb-10 w-72 lg:w-auto"
              alt="logoall"
            />
            <div className="max-w-xl mx-auto h-auto rounded-3xl p-10 bg-gray-300 bg-opacity-10 shadow-xl justify-center items-center">
              <form className="w-full">
                <h3 className="text-white font-bold text-4xl mb-8">Sign In</h3>
                <p className="text-gray-400 text-xl mb-8">
                  Login to see your dashboard
                </p>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-white">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsername}
                    className="block bg-transparent appearance-none border rounded-md w-full py-3 px-4 text-white leading-5 focus:outline-none mb-8"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    className="block bg-transparent appearance-none border rounded-md w-full py-3 px-4 text-white leading-5 focus:outline-none mb-8"
                  />
                </div>
                <div className="flex gap-3 items-center mb-3">
                  <input type="checkbox" className="checked:bg-blue" />
                  <p className="text-gray-400 text-xl gap-px">Remember me</p>
                </div>
                <button
                  className="w-full bg-blue-800 text-white font-bold py-3 px-4 rounded text-2xl hover:bg-blue-700"
                  onClick={loginHandle}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="flex mx-auto items-center justify-center mt-10 gap-1">
              <p className="text-gray-400 text-xl">Don’t have an account?</p>
              <button>
                <Link to="/register" className="text-blue-400 text-xl">
                  Sign up
                </Link>
              </button>
            </div>
            <div className="flex mx-auto items-center justify-center mt-5">
              <button>
                <Link to="#" className="text-blue-400 text-xl">
                  Forgot password?
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logins;
