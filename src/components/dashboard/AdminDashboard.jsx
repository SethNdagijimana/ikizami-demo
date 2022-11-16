import React from 'react';
import "./admin.css";
import Body from './Body Section/Body';
import Sidebar from './sidebar section/Sidebar';

function AdminDashboard() {
  return (
    <div className="body">
    <div className="body-container">

    <Body />
    <Sidebar />
    </div>
    </div>
  )
}

export default AdminDashboard
