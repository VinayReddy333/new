import React from "react"
import './index.css'
const Header = () => {
  return (
    <div className="header">
      <h1>Agent View</h1>
      <div className="header-actions">
        <button>Process Owner HOD</button>
        <button>Admin</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
