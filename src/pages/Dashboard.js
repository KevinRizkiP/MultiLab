import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../features/authSlice";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("items"));
    if (localStorageItems) {
      setData(localStorageItems);
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div>
      Profile
      <div>
        <h1>{data.username}</h1>
        <h1>{data.email}</h1>
        <h1>{data.accessToken}</h1>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
