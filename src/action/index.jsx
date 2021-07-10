export const sumNumber = (num1, num2) => {
  return {
    type: "SUM",
    payload: num1,
    payload2: num2,
  };
};

export const mulNumber = (num1, num2) => {
  return {
    type: "MULPLICATION",
    payload: num1,
    payload2: num2,
  };
};
