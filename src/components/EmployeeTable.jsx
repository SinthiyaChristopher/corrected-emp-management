import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

const EmployeeTable = ({
  employees,
  onDelete,
  onEdit,
  onView
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Position</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b"
              >
                <td className="p-3">
                  <img
                    src={
                      employee.image ||
                      "https://via.placeholder.com/40"
                    }
                    alt={employee.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>

                <td className="p-3">
                  {employee.name}
                </td>

                <td className="p-3">
                  {employee.email}
                </td>

                <td className="p-3">
                  {employee.department}
                </td>

                <td className="p-3">
                  {employee.position}
                </td>

                <td className="p-3">
                  <StatusBadge
                    status={employee.status}
                  />
                </td>

                <td className="p-3">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() =>
                        onView(employee.id)
                      }
                      className="text-blue-500"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() =>
                        onEdit(employee.id)
                      }
                      className="text-green-500"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() =>
                        onDelete(employee.id)
                      }
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-center p-5"
              >
                No Employees Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;