export const getEmployees = () => {
  return (
    JSON.parse(localStorage.getItem("employees")) ||
    []
  );
};

export const saveEmployees = (employees) => {
  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  );
};