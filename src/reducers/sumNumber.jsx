const intialState = {
  sum: 0,
};
const sumTheNumber = (state = intialState.sum, action) => {
  switch (action.type) {
    case "SUM":
      return state + action.payload + action.payload2;

    default:
      return state;
  }
};

export default sumTheNumber;
