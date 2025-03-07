import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Admin" && password === "Pass123") {
      dispatch(login());
      navigate("/todo"); // Redirect to todo Page
    } else {
      alert("Invalid Username or Password...!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="p-4 border rounded shadow bg-dark"
          style={{ width: "450px", height: "300px" }}
        >
          <h2 className="text-center mb-4 text-light">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="form-control mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="btn btn-success w-100">
            Login
          </button>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Login;
