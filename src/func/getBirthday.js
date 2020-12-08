let options = {
  month: "long",
};

const getBirthday = (employee) => {
  let dayOfBirth = new Date(employee.dob);
  return (
    <div>
      {employee.lastName +
        " " +
        employee.firstName +
        " - " +
        dayOfBirth.getDate() +
        " " +
        dayOfBirth.toLocaleString("US", options) +
        ", " +
        dayOfBirth.getFullYear() +
        " year"}
    </div>
  );
};

export { getBirthday };
