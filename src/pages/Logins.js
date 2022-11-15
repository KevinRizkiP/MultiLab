import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Logins = () => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUserame(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const isAuthorized = useSelector((state) => state.authSlice);
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
    if (isAuthorized) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <form className="flex flex-col items-center gap-5">
        <h3>Sign In</h3>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
            className="visible bg-transparent border rounded-md py-3 px-4 text-black leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            className="visible bg-transparent border rounded-md py-3 px-4 text-black leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
          />
        </div>
        <button
          className="bg-yellow-300 text-white font-bold py-3 px-4 rounded text-2xl hover:bg-yellow-400"
          onClick={loginHandle}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Logins;
