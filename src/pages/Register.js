import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUpUser } from "../features/authSlice";

const Register = () => {
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setUserame(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const registHandle = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
    };
    dispatch(signUpUser(user));
  };

  return (
    <div className="w-full bg-cover h-full bg-gradient-to-bl from-gray-700 via-gray-900 to-black justify-center items-center">
      <section className="max-w-7xl mx-auto justify-center items-center ">
        <div className="min-h-screen lg:flex justify-center items-center gap-8">
          <div className="rounded-3xl p-10 lg:bg-gray-300 lg:bg-opacity-10 lg:shadow-xl max-w-xl mx-auto h-auto">
            <img
              src="/IMG/logo2.png"
              className="mx-auto items-center justify-center mb-10 w-64 lg:w-full"
              alt="logoMultiBig"
            />
          </div>
          <div className="w-full mx-auto justify-center items-center px-6 lg:px-0">
            <div className="max-w-xl mx-auto h-auto rounded-3xl justify-center items-center">
              <form className="w-full">
                <h3 className="text-white font-bold text-4xl mb-8">Sign Up</h3>
                <p className="text-gray-400 text-xl mb-8">
                  Created for students and by students
                </p>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleName}
                    className="block bg-transparent appearance-none border rounded-md w-full py-3 px-4 text-white leading-5 focus:outline-none mb-8"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
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
                  <p className="text-gray-400 text-xl gap-px">
                    I agree to the Terms & Conditions
                  </p>
                </div>
                <button
                  className="w-full bg-blue-800 text-white font-bold py-3 px-4 rounded text-2xl hover:bg-blue-700"
                  onClick={registHandle}
                >
                  Register
                </button>
              </form>
            </div>
            <div className="flex mx-auto items-center justify-center mt-10 gap-1">
              <p className="text-gray-400 text-xl">Already have an account?</p>
              <button>
                <Link to="/login" className="text-blue-400 text-xl">
                  Sign in
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
