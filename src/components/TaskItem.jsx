function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="task">
      <span className={task.completed ? "completed" : ""}>
        {task.text}
      </span>

      <div>
        <button onClick={toggleTask}>✔</button>
        <button onClick={deleteTask}>❌</button>
      </div>
    </div>
  );
}

export default TaskItem;