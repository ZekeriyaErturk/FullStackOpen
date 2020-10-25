export const filtered = (filter) => ({
  type: "FILTER",
  filter,
});

const reducer = (state = null, action) => {
  switch (action.type) {
    case "FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
