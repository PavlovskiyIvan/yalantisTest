import React, { useState } from "react";
import Birthdays from "../Birthdays/Birthdays";

export default function EmployeesField({ employees }) {
  let [dataForBirthday, setDataForBirthday] = useState(undefined);
  let [chosenDob, setChosenDob] = useState([]);

  let arrEN = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let arrSorted = [];

  function exportData(employee) {
    setDataForBirthday(employee);
    onAddDob(employee);
  }

  const onAddDob = (employee) => {
    setChosenDob((prevDobs) => [...prevDobs, employee]);
  };

  let chosenDobSorted = [];

  let fillChosenDobSorted = () => {
    for (let i = 0; i < 12; i++) {
      chosenDobSorted[i] = [];
      chosenDobSorted[i].push(i);
    }
  };

  fillChosenDobSorted();

  chosenDob.map((chosen) => {
    for (let i of chosenDobSorted) {
      let dayOfBirth = new Date(chosen.dob);
      let temp = dayOfBirth.getMonth();
      if (temp === i[0]) {
        for (let k of i) {
          let tempK = k.id;
          if (tempK === chosen.id) {
            i.pop();
          }
        }
        i.push(chosen);
      }
    }
    return chosenDobSorted;
  });

  for (let i = 0; i < arrEN.length; i++) {
    arrSorted[i] = [];

    for (let k of employees) {
      if (k.lastName[0] === arrEN[i]) {
        arrSorted[i].push(k);
      }
    }

    if (arrSorted[i].length === 0) {
      arrSorted[i].push("------");
    }
  }

  return (
    <div className="main-div">
      <div className="employees-field">
        <h2 className="employees-field__h2">EMPLOYEES</h2>

        <ol type="A" className="employees-field__ol">
          {arrSorted.map((arrSortedLetter) => (
            <li>
              <ul type="none" className="employees-field__ul">
                {arrSortedLetter.map((employee) => {
                  if (typeof employee === "string") {
                    return <li>{employee}</li>;
                  } else {
                    return (
                      <li key={employee.id}>
                        {employee.lastName
                          ? employee.lastName + " " + employee.firstName
                          : employee}
                        <input
                          type="checkbox"
                          value={employee.id}
                          id={employee.id}
                          onChange={() => exportData(employee)}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      {dataForBirthday !== undefined ? (
        <Birthdays chosenDobArray={chosenDobSorted} />
      ) : (
        <Birthdays data={undefined} />
      )}
    </div>
  );
}
