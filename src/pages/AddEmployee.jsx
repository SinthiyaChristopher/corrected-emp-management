import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"
const AddEmployee = () => {
  const { employees, setEmployees } =
    useContext(EmployeeContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    status: "Active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      department: form.department,
      position: form.position,
      status: form.status,
    };

    const updatedEmployees = [
      ...employees,
      newEmployee,
    ];

    // Update state
    setEmployees(updatedEmployees);

    // Save permanently
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    alert("Employee Added Successfully");

    navigate("/employees");
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-lg"
      >
        <h2 className="text-xl font-bold mb-4">
          Add Employee
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          required
        />

        <input
          type="text"
          placeholder="Department"
          className="border p-2 w-full mb-3"
          value={form.department}
          onChange={(e) =>
            setForm({
              ...form,
              department: e.target.value,
            })
          }
          required
        />

        <input
          type="text"
          placeholder="Position"
          className="border p-2 w-full mb-3"
          value={form.position}
          onChange={(e) =>
            setForm({
              ...form,
              position: e.target.value,
            })
          }
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          Save Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;