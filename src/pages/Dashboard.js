import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("items"));
    console.log(localStorageItems);
    if (localStorageItems) {
      setData(localStorageItems);
    }
  }, []);

  return (
    <div>
      Profile
      <div>
        <h1>{data.username}</h1>
        <h1>{data.email}</h1>
        <h1>{data.accessToken}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
