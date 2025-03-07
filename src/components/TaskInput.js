import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask({ id: uuidv4(), text: task, priority }));
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        className="form-control mb-3"
      />

      <h6 className="text-light">Priority Levels</h6>
      <select
        class="btn btn-light dropdown-toggle"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button className="btn btn-success mx-4 w-45" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
