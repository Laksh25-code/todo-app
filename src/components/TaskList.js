import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../redux/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-center my-1 text-light">Tasks</h2>
      <ul className="list-unstyled">
        {tasks.map((task) => (
          <li key={task.id} className="text-light d-flex justify-content-between align-items-center mb-2">
            <span>{task.text} - <strong>{task.priority}</strong></span>
            <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeTask(task.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
