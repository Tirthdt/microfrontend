import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";

const DashboardApp = () => {
  const dashboardRef = useRef(null);

  useEffect(() => {
    if (dashboardRef) {
      mount(dashboardRef.current);
    }
  }, []);

  return <div className="dashboard-section" ref={dashboardRef}></div>;
};

export default DashboardApp;
