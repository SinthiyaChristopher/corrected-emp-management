import StatusBadge from "./StatusBadge";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center gap-4">
        <img
          src={
            employee.image ||
            "https://via.placeholder.com/80"
          }
          alt={employee.name}
          className="w-16 h-16 rounded-full"
        />

        <div>
          <h3 className="font-bold">{employee.name}</h3>
          <p className="text-gray-500">{employee.email}</p>
          <p>{employee.department}</p>

          <div className="mt-2">
            <StatusBadge status={employee.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;