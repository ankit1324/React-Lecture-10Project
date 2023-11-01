import { useState } from "react";
import "./AddTask.css";

export const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");

  const handeChange = (event) => {
    setTaskValue(event.target.value);
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
        />
        <button type="submit"> Add TASK</button>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};
