import React from "react";
import { getBirthday } from "../../func/getBirthday";

export default function Birthdays({ chosenDobArray }) {
  let test = JSON.parse(sessionStorage.employees);
  if (chosenDobArray === undefined) {
    return <h3>No selected employees</h3>;
  } else if (chosenDobArray !== undefined) {
    sessionStorage.employees = JSON.stringify(chosenDobArray);
    if (test === "object") {
      return (
        <div>
          {test.map((monthArray) => {
            if (monthArray.length > 1) {
              switch (monthArray[0]) {
                case 0:
                  return monthArray.map((employee) => {
                    if (employee === 0) {
                      return <h4>January</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 1:
                  return monthArray.map((employee) => {
                    if (employee === 1) {
                      return <h4>February</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 2:
                  return monthArray.map((employee) => {
                    if (employee === 2) {
                      return <h4>March</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 3:
                  return monthArray.map((employee) => {
                    if (employee === 3) {
                      return <h4>April</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 4:
                  return monthArray.map((employee) => {
                    if (employee === 4) {
                      return <h4>May</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 5:
                  return monthArray.map((employee) => {
                    if (employee === 5) {
                      return <h4>June</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 6:
                  return monthArray.map((employee) => {
                    if (employee === 6) {
                      return <h4>July</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 7:
                  return monthArray.map((employee) => {
                    if (employee === 7) {
                      return <h4>August</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 8:
                  return monthArray.map((employee) => {
                    if (employee === 8) {
                      return <h4>September</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 9:
                  return monthArray.map((employee) => {
                    if (employee === 9) {
                      return <h4>October</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 10:
                  return monthArray.map((employee) => {
                    if (employee === 10) {
                      return <h4>November</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 11:
                  return monthArray.map((employee) => {
                    if (employee === 11) {
                      return <h4>December</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                default:
                  break;
              }
            }
          })}
        </div>
      );
    } else {
      return (
        <div>
          {chosenDobArray.map((monthArray) => {
            if (monthArray.length > 1) {
              switch (monthArray[0]) {
                case 0:
                  return monthArray.map((employee) => {
                    if (employee === 0) {
                      return <h4>January</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 1:
                  return monthArray.map((employee) => {
                    if (employee === 1) {
                      return <h4>February</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 2:
                  return monthArray.map((employee) => {
                    if (employee === 2) {
                      return <h4>March</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 3:
                  return monthArray.map((employee) => {
                    if (employee === 3) {
                      return <h4>April</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 4:
                  return monthArray.map((employee) => {
                    if (employee === 4) {
                      return <h4>May</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 5:
                  return monthArray.map((employee) => {
                    if (employee === 5) {
                      return <h4>June</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 6:
                  return monthArray.map((employee) => {
                    if (employee === 6) {
                      return <h4>July</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 7:
                  return monthArray.map((employee) => {
                    if (employee === 7) {
                      return <h4>August</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 8:
                  return monthArray.map((employee) => {
                    if (employee === 8) {
                      return <h4>September</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 9:
                  return monthArray.map((employee) => {
                    if (employee === 9) {
                      return <h4>October</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 10:
                  return monthArray.map((employee) => {
                    if (employee === 10) {
                      return <h4>November</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                case 11:
                  return monthArray.map((employee) => {
                    if (employee === 11) {
                      return <h4>December</h4>;
                    } else {
                      return getBirthday(employee);
                    }
                  });
                default:
                  break;
              }
            }
          })}
        </div>
      );
    }
  } else {
    return <div></div>;
  }
}
