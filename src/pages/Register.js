import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../features/authSlice";

const Register = () => {
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setUserame(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const dispatch = useDispatch();

  const registHandle = (e) => {
    e.preventDefault();
    dispatch(signUpUser(username, email, password));
  };

  return (
    <div>
      <form className="flex flex-col items-center gap-5">
        <h3>Sign Up</h3>
        <div className="flex flex-col">
          <label htmlFor="">Username</label>
          <input
            type="name"
            placeholder="Username"
            value={username}
            onChange={handleName}
            className="visible bg-transparent border rounded-md py-3 px-4 text-black leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
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
        <div className="flex flex-col">
          <label htmlFor="">Role</label>
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={handleRole}
            className="visible bg-transparent border rounded-md py-3 px-4 text-black leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
          />
        </div>
        <button
          className="bg-yellow-300 text-white font-bold py-3 px-4 rounded text-2xl hover:bg-yellow-400"
          onClick={registHandle}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
