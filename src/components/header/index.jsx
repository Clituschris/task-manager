import "./index.scss";

const Header = ({ setPopupVisible }) => {
  const handleClick = () => {
    setPopupVisible(true);
  };
  return (
    <div className="header">
      <div>
        <div className="avatar">
          <span>c</span>
          <span className="status-indicator"></span>
        </div>
      </div>
      <input className="search-container" placeholder="Search" />
      <button className="add-task-btn" onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
};

export default Header;
