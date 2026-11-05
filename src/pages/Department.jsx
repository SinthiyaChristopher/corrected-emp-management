import { useState } from "react";

const Department = () => {
  const [departments, setDepartments] = useState(() => {
    const stored = localStorage.getItem("departments");

    return stored
      ? JSON.parse(stored)
      : ["IT", "HR", "Finance", "Banking"];
  });

  const [newDept, setNewDept] = useState("");

  const addDepartment = () => {
    if (!newDept.trim()) return;

    const updatedDepartments = [
      ...departments,
      newDept,
    ];

    setDepartments(updatedDepartments);

    localStorage.setItem(
      "departments",
      JSON.stringify(updatedDepartments)
    );

    setNewDept("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white">
        Departments
      </h2>

      <div className="flex gap-3 my-4">
        <input
          className="border border-slate-600 bg-[#1e293b] text-white p-2 rounded-lg 
          placeholder-slate-400"
           placeholder="Enter department"
          value={newDept}
          onChange={(e) =>
            setNewDept(e.target.value)
          }
        />

        <button
          onClick={addDepartment}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {departments.map((dept, i) => (
        <div
          key={i}
          className="bg-white shadow p-3 mb-2 rounded"
        >
          {dept}
        </div>
      ))}
    </div>
  );
};

export default Department;