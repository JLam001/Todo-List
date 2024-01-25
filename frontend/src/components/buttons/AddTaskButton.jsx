import { useTaskApiContext } from "../providers/TaskApiContext";
import PropTypes from "prop-types";

export const AddTaskButton = ({ inputValue, handleAddTask }) => {
  const { fetchPostData } = useTaskApiContext();

  const handleClick = async () => {
    await fetchPostData(inputValue);
    handleAddTask();
  };

  return (
    <button
      type='button'
      className='absolute bottom-2.5 end-2.5 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:border-transparent hover:bg-blue-600 hover:text-white'
      onClick={handleClick}
    >
      + Add
    </button>
  );
};

AddTaskButton.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleAddTask: PropTypes.func,
};
