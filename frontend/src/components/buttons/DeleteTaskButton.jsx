import PropTypes from "prop-types";
import { useTaskApiContext } from "../providers/TaskApiContext";

export const DeleteTaskButton = ({ id }) => {
  const { fetchDeleteData } = useTaskApiContext();

  const handleClick = async () => {
    await fetchDeleteData(id);
  };

  return (
    <button
      className='rounded-lg bg-transparent px-[15px] py-[5px] my-5 font-semibold text-blue-700 hover:border-transparent hover:bg-red-500 hover:text-white'
      onClick={handleClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
        />
      </svg>
    </button>
  );
};

// prop validation
DeleteTaskButton.propTypes = {
  id: PropTypes.string.isRequired,
};
