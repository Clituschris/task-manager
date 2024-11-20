import { useMemo } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "./taskCard";
import { changeStatus } from "../store/dashboard.reducer";

const StatusListLayout = ({ status }) => {
  const { tasks } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const filteredTasks = useMemo(() =>
    tasks.filter((item) => item.status === status)
  );

  const onDrop = (e) => {
    const id = e.dataTransfer.getData("ID");
    console.log("id", id, status);
    dispatch(changeStatus({ id, status }));
  };
  return (
    <div
      className="status-list-layout"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="status-title">
        <span>{status}</span>
        <span className="count">{`(${filteredTasks.length})`}</span>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default StatusListLayout;
