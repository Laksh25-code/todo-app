import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Todo = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5 d-flex justify-content-center align-items-center">
        <div
          className="p-4 border rounded shadow bg-dark d-flex flex-column"
          style={{ width: "700px", height: "500px" }}
        >
          <h2 className="text-center mb-3 text-light">TO-DO List</h2>

          <TaskInput />

          <div
            className="flex-grow-1 overflow-auto mt-3"
            style={{ maxHeight: "320px" }} // Adjust maxHeight as needed
          >
            <TaskList />
          </div>

          <div className="mt-3">
            <button className="btn btn-danger w-100" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Todo;
