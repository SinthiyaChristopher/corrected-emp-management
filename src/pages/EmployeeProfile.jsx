import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeProfile = () => {
  const { id } = useParams();

  const { employees } =
    useContext(EmployeeContext);

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold">
          {employee.name}
        </h2>

        <p>{employee.email}</p>
        <p>{employee.department}</p>
        <p>{employee.position}</p>
        <p>{employee.status}</p>
      </div>
    </div>
  );
};

export default EmployeeProfile;