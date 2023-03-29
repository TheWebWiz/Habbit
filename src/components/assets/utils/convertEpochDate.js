const convertEpochDate = (epochDate) => {
  const myDate = new Date(epochDate * 1000);
  return myDate.toLocaleString();
};

export default convertEpochDate;
