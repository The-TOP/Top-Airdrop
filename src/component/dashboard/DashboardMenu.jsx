import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import miniLogo from "../../img/miniLogo.png";
import mainLogo from "../../img/MainLogo.png";
import { FiGift, FiDollarSign, FiHome, FiClock } from "react-icons/fi";
import { FaChartLine, FaSquare } from "react-icons/fa6";

const DashboardMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [activePath, setActivePath] = useState(location.pathname);

  // Watch window resize to collapse on mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCollapsed(mobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { label: "Dashboard", icon: <FiHome />, path: "/dashboard" },
    { label: "Tasks", icon: <FiGift />, path: "/dashboard/tasks" },
    { label: "Activity", icon: <FiClock />, path: "/dashboard/activity" },
    { label: "Extract", icon: <FaChartLine />, path: "/dashboard/extract" },
    {
      label: "Tokenomics",
      icon: <FiDollarSign />,
      path: "/dashboard/tokenomics",
    },
    { label: "Withdraw", icon: <FaSquare />, path: "/dashboard/withdraw" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-black/60 ">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        backgroundColor="#000000"
        rootStyles={{
          color: "#fff",
          borderRight: "1px solid #1f1f1f",
          width: collapsed ? "40px" : "220px",
          transition: "width 0.3s ease",
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ active }) => ({
              backgroundColor: "transparent",
              color: active ? "#22c55e" : "#d1d5db", // label color
              display: "flex",
              justifyContent: collapsed ? "center" : "flex-start",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              margin: "0.25rem",
              transition: "all 0.2s ease-in-out",
            }),
            icon: ({ active }) => ({
              backgroundColor: active
                ? "rgba(34, 197, 94, 0.1)"
                : "transparent", // green tint on icon only
              color: active ? "#22c55e" : "#9ca3af",
              borderRadius: "50%",
              padding: "0.5rem",
              transition: "all 0.2s ease-in-out",
            }),
            label: ({ active }) => ({
              color: active ? "#22c55e" : "#9ca3af", // consistent label color
            }),
            hover: {
              icon: {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#fff",
              },
            },
          }}
        >
          <div className={`mb-8 md:mb-12 md:mt-6 md:ms-4 ${!collapsed && "ms-1 "}`}>
          <Link to={"/"}><img
              src={collapsed ? miniLogo : mainLogo}
              alt="logo"
              className={`${collapsed ? "w-8 mx-auto mt-3 md:mt-5  " : "w-30"}`}
            /></Link> 
          </div>

          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              icon={item.icon}
              active={
                item.path === "/dashboard"
                  ? activePath === "/dashboard"
                  : activePath.startsWith(item.path)
              }
              onClick={() => {
                setActivePath(item.path);
                navigate(item.path);
              }}
              style={{
                backgroundColor: "transparent",
                fontSize: collapsed ? "large" : "medium",
              }}
            >
              {!collapsed && item.label}
            </MenuItem>
          ))} 
        </Menu>
      </Sidebar>

      {/* Main content */}
      <main className="flex-1 bg-black/94 py-4 overflow-y-auto relative pt-18 md:pt-24">
        <div className=" -ms-5  bg-black fixed text-white  w-full top-0 py-6 md:py-0 md:h-1/8  border-white/20 border-b-3 border-dotted">
          <img src={mainLogo} alt="" className="fixed right-10 w-20 top-4 md:top-6" />
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardMenu;
