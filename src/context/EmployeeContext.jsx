import { createContext, useState } from "react";
import { employeesData } from "../data/dummyData";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const storedEmployees =
      localStorage.getItem("employees");

    return storedEmployees
      ? JSON.parse(storedEmployees)
      : employeesData;
  });

  return (
    <EmployeeContext.Provider
      value={{ employees, setEmployees }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
