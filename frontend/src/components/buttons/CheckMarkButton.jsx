// export const CheckMarkButton = () => {
//   return (
//     <button className='rounded-lg bg-transparent px-[15px] py-[5px] my-5 font-semibold text-blue-700 hover:border-transparent hover:bg-green-500 hover:text-white'>
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         className='h-6 w-6'
//         fill='none'
//         viewBox='0 0 24 24'
//         stroke='currentColor'
//         strokeWidth='2'
//       >
//         <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
//       </svg>
//     </button>
//   );
// };

// CheckMarkButton.jsx
import PropTypes from "prop-types";

export const CheckMarkButton = ({ onCheck }) => {
  return (
    <button
      className='rounded-lg bg-transparent px-[15px] py-[5px] my-5 font-semibold text-blue-700 hover:border-transparent hover:bg-green-500 hover:text-white'
      onClick={onCheck}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
      </svg>
    </button>
  );
};

// prop validation
CheckMarkButton.propTypes = {
  onCheck: PropTypes.func.isRequired,
};
