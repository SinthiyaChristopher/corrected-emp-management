import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeTable from "../components/EmployeeTable";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Employees = () => {
  const { employees, setEmployees } =
    useContext(EmployeeContext);

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const employeesPerPage = 5;

  const lastIndex = currentPage * employeesPerPage;
  const firstIndex = lastIndex - employeesPerPage;

  const currentEmployees = filteredEmployees.slice(
    firstIndex,
    lastIndex
  );

  const handleView = (id) => {
    navigate(`/employees/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/employees/edit/${id}`);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(
      (emp) => emp.id !== id
    );

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-5">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Employees
          </h1>

          <p className="text-slate-300 mt-1">
            Manage employee information and records
          </p>
        </div>

        <button
          onClick={() => navigate("/employees/add")}
          className="mt-4 md:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          + Add Employee
        </button>

      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-5">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">

        <div className="overflow-x-auto">
          <EmployeeTable
            employees={currentEmployees}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

      </div>

      {/* Pagination */}
      <div className="mt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            filteredEmployees.length /
              employeesPerPage
          )}
          setCurrentPage={setCurrentPage}
        />
      </div>

    </div>
  );
};

export default Employees;