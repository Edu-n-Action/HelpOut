const getDateData = () => {
  let day = [];
  for (let i = 1; i <= 31; ++i) {
    day.push(i);
  }
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = [];
  for (let i = 0; i <= 20; ++i) {
    year.push(2024 + i);
  }
  return {
    day: day,
    month: month,
    year: year,
  };
};

let dateData = getDateData();

export default dateData;
