// TaskApiContext.js
import { createContext, useContext } from "react";

const TaskApiContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskApiContext = () => {
  return useContext(TaskApiContext);
};

export default TaskApiContext;
