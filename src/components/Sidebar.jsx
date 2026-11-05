import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Employees",
      path: "/employees",
      icon: <FaUsers />,
    },
    {
      name: "Departments",
      path: "/departments",
      icon: <FaBuilding />,
    },
    {
      name: "Leave Requests",
      path: "/leave-requests",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <FaClock />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#1d2a3f] text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 p-6 border-b border-slate-600">
          <div className="w-12 h-12 bg-[#9c82ff] rounded-xl flex items-center justify-center text-2xl font-bold">
            H
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Employee
            </h1>

            <p className="text-sm text-slate-300">
              Management System
            </p>
          </div>
        </div>

        <div className="px-6 pt-8">
          <p className="text-slate-400 text-sm tracking-[3px] uppercase font-semibold">
            Main Menu
          </p>
        </div>

        <div className="px-4 mt-5">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 mb-3 rounded-2xl transition-all ${
                  isActive
                    ? "bg-[#4c3b7e] text-[#9c82ff]"
                    : "text-slate-300 hover:bg-[#2b3c57]"
                }`
              }
            >
              <span className="text-xl">
                {item.icon}
              </span>

              <span className="text-lg">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-600 p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#4c3b7e] flex items-center justify-center text-[#9c82ff] font-bold">
            AU
          </div>

          <div>
            <h3 className="font-semibold">
              Admin User
            </h3>

            <p className="text-sm text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;