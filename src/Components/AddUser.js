import React from "react";
import { useState } from "react";

const AddUser = ({addUser}) => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setUserData({ ...userData, name: e.target.value });
    } else {
      setUserData({ ...userData, email: e.target.value });
    }
  };

  const handleAdd = () => {
    if (userData.name === "" || userData.email === "") {
      alert("Please fill the details");
      return;
    }
    addUser(userData)
    setUserData({name: "", email: ""})
  };

  return (
    <div className="container">
      <div className="top-section">
        <h1>Add User</h1>
      </div>
      <div className="bottom-section">
        <form>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </form>
        <button onClick={handleAdd}>AddUser</button>
      </div>
    </div>
  );
};

export default AddUser;
