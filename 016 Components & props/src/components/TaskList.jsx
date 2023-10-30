import { useState } from "react";
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
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default TaskList;
