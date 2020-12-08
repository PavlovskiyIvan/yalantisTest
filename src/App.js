import React, { useEffect, useState } from "react";
import { getResultAPI } from "./api/api";
import EmployeesField from "./components/Employees/EmployeesField";

const App = () => {
  const [employeesInfo, getEmployeesInfo] = useState(null);

  useEffect(() => {
    getResultAPI()
      .then((res) => res.json())
      .then((data) => getEmployeesInfo(data));
  }, []);

  return (
    <div>
      {employeesInfo !== null ? (
        <EmployeesField employees={employeesInfo} />
      ) : null}
    </div>
  );
};

export default App;
