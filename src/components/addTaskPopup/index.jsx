import { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addTask } from "../../modules/dashboard/store/dashboard.reducer";

const AddTaskPopup = ({ setPopupVisible }) => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: "",
    summary: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTask({ ...task, [id]: value });
  };

  const handleClick = () => {
    const id = new Date().getTime().toString();
    dispatch(addTask({ ...task, id, status: "ToDo" }));
    setPopupVisible(false);
  };

  const handleClose = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    if (task.title === "" || task.summary === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [task]);

  return (
    <div className="popup-mask">
      <div className="popup">
        <div className="title">Add Task</div>
        <label htmlFor="title">Title</label>
        <input id="title" onChange={handleChange} />
        <label htmlFor="summary">Summary</label>
        <textarea id="summary" rows="5" onChange={handleChange} />
        <div className="buttons-layout">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="add-button"
            onClick={handleClick}
            disabled={buttonDisabled}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskPopup;
