import { useEffect, useState } from "react";
import TaskApiContext from "./TaskApiContext";
import PropTypes from "prop-types";

export const TaskApiProvider = ({ children }) => {
  const BASE_URL = "http://localhost:3000/todo";
  const [tasks, setTask] = useState([]);

  // GET Request
  const fetchGetData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (data.length) {
        setTask(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE Request
  const fetchDeleteData = async (id) => {
    try {
      const response = await fetch(BASE_URL + `/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("DELETE request successful");
        setTask(tasks.filter((task) => task._id !== id));
      } else {
        console.log("DELETE request failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // POST Request
  const fetchPostData = async (newTask) => {
    try {
      const response = await fetch(BASE_URL + "/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: newTask }),
      });

      if (response.ok) {
        console.log("POST request successful");
        fetchGetData(); // Refresh data after successful post
        //setTask([...tasks, newTask]); // Add new task to the current state
      } else {
        console.log("POST request failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TaskApiContext.Provider
      value={{ tasks, setTask, fetchDeleteData, fetchPostData }}
    >
      {children}
    </TaskApiContext.Provider>
  );
};

// prop validation
TaskApiProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
