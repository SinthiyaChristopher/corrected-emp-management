import Attendance from "../pages/Attendance";
import LeaveRequest from "../pages/LeaveRequest";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";
import EmployeeProfile from "../pages/EmployeeProfile";
import Department from "../pages/Department";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/employees" element={<Employees />} />

        <Route
          path="/employees/add"
          element={<AddEmployee />}
        />

        <Route
          path="/employees/edit/:id"
          element={<EditEmployee />}
        />

        <Route
          path="/employees/:id"
          element={<EmployeeProfile />}
        />

        <Route
          path="/departments"
          element={<Department />}
        />

        <Route
          path="/attendance"
          element={<Attendance />}
        />

        <Route
          path="/leave-requests"
          element={<LeaveRequest />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
