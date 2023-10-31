import { useState } from "react";
import TaskCard from "./TaskCard";
function TaskList(props) {
  const [tasks, setTasks] = useState([
    { id: 123, name: "React", completed: true },
    { id: 124, name: "Node", completed: false },
    { id: 125, name: "Database", completed: false },
  ]);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Task List {props.title} {props.subTitle}
      </h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </>
  );
}

export default TaskList;
