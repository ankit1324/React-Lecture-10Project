import { useState } from "react";
import "./AddTask.css";

export const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");

  const handeChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
  };

  return (
    <section className="addtask">
      <form>
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
        <button type="submit"> Add TASK</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};
