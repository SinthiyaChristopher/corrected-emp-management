import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EditEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { employees, setEmployees } =
    useContext(EmployeeContext);

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  const [form, setForm] = useState(employee);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEmployees = employees.map(
      (emp) =>
        emp.id === Number(id)
          ? form
          : emp
    );

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    navigate("/employees");
  };

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6"
    >
      <h2 className="text-2xl mb-4">
        Edit Employee
      </h2>

      <input
        className="border p-2 w-full mb-3"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        className="border p-2 w-full mb-3"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update Employee
      </button>
    </form>
  );
};

export default EditEmployee;