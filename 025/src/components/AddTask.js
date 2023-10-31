import "./AddTask.css";

export const AddTask = () => {
  return (
    <section className="addtask">
      <form>
        <label htmlFor="task">TaskName:</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="taskName"
          autoComplete="off"
        />
        <button type="submit"> Add TASK</button>
      </form>
    </section>
  );
};
