import "./index.css"


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Risk Hawk</div>
      <ul className="sidebar-menu">
        <li>Internal Audit</li>
        <li>UAT Testing</li>
        <li>Interact</li>
        <li>Queue</li>
        <li>Admin</li>
        <li>Asset</li>
      </ul>
    </div>
  );
};

export default Sidebar;
