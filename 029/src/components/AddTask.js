import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handeChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">TaskName:</label>
        <input
          onChange={handeChange}
          type="text"
          name="task"
          id="task"
          placeholder="taskName"
          autoComplete="off"
          value={taskValue}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value={true}>Completed</option>
          <option value={false}>Pending</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit"> Add TASK</button>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};
