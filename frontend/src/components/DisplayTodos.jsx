import PropTypes from "prop-types";
import { useState } from "react";
import { TaskButtons } from "./buttons/TaskButtons";

export const DisplayTodos = ({ id, task }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div
      className={`group relative flex items-center justify-between gap-2 rounded-lg bg-sky-100 p-3 text-blue-500 transition hover:cursor-pointer hover:bg-slate-100 ${
        completed ? "line-through" : ""
      }`}
    >
      <span>{task}</span>
      <div className='hidden absolute end-2.5 group-hover:flex'>
        <TaskButtons id={id} onCheck={toggleCompleted} />
      </div>
    </div>
  );
};

// prop validation
DisplayTodos.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
