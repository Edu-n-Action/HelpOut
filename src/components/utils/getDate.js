const getDate = (value = [0, 0, 0]) => {
  const date = new Date(Number(value[2]), Number(value[1]), Number(value[0]));
  return date;
};

export default getDate;
