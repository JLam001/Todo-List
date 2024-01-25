import { DeleteTaskButton } from "./DeleteTaskButton";
import { CheckMarkButton } from "./CheckMarkButton";
import PropTypes from "prop-types";

export const TaskButtons = ({ id, onCheck }) => {
  return (
    <>
      <CheckMarkButton onCheck={onCheck} />
      <DeleteTaskButton id={id} />
    </>
  );
};

// prop validation
TaskButtons.propTypes = {
  id: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
};
