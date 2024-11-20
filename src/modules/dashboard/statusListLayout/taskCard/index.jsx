import { useMemo } from "react";
import "./index.scss";
import { getPrevStatus, getNextStatus } from "./utility";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../store/dashboard.reducer";

const TaskCard = ({ task }) => {
  const prevStatus = useMemo(() => getPrevStatus(task.status), [task.status]);
  const nextStatus = useMemo(() => getNextStatus(task.status), [task.status]);
  const dispatch = useDispatch();

  const handleButtonClick = (status) => {
    dispatch(changeStatus({ id: task.id, status }));
  };

  const onDragStart = (e,id) => {
    e.dataTransfer.setData("ID",id);
  };

  return (
    <div
      className="task-card"
      draggable={true}
      onDragStart={(e) => onDragStart(e, task.id)}
    >
      <span className="title">{task.title}</span>
      <div className="summary">{task.summary}</div>
      <div className="footer-layout">
        <span>Move to :</span>
        <div className="buttons-layout">
          {prevStatus && (
            <button
              className={`${prevStatus}-button`}
              onClick={() => handleButtonClick(prevStatus)}
            >
              {prevStatus}
            </button>
          )}
          {nextStatus && (
            <button
              className={`${nextStatus}-button`}
              onClick={() => handleButtonClick(nextStatus)}
            >
              {nextStatus}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
