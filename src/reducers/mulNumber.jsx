const intialState = {
  mul: 1,
};
const mulTheNumber = (state = intialState.mul, action) => {
  switch (action.type) {
    case "MULPLICATION":
      return state * action.payload * action.payload2;

    default:
      return state;
  }
};

export default mulTheNumber;
