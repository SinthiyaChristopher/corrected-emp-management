const StatusBadge = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Inactive":
        return "bg-red-100 text-red-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Approved":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${getColor()}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;