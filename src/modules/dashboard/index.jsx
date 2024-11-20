import { useState } from "react";
import Header from "../../components/header";
import "./index.scss";
import StatusListLayout from "./statusListLayout";
import AddTaskPopup from "../../components/addTaskPopup";

const Dashboard = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <div className="dashboard">
      <Header setPopupVisible={setPopupVisible} />
      <div className="main-layout">
        <StatusListLayout status="ToDo" />
        <StatusListLayout status="InProgress" />
        <StatusListLayout status="Review" />
        <StatusListLayout status="Completed" />
      </div>
      {popupVisible && <AddTaskPopup setPopupVisible={setPopupVisible} />}
    </div>
  );
};

export default Dashboard;
