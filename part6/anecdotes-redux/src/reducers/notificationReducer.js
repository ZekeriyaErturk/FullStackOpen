export const clearNotification = () => ({ type: "RESET" });

// Timeout clearing
let clear;
export const setNotification = (str, sec) => {
  return async (dispatch) => {
    await dispatch({
      type: "NOTIFICATION",
      data: str,
    });
    if (clear) clearTimeout(clear);
    clear = setTimeout(() => {
      dispatch(clearNotification());
    }, sec * 1000);
  };
};

const reducer = (state = "", action) => {
  console.log("STATE: ", state);
  console.log("ACTION: ", action);
  switch (action.type) {
    case "NOTIFICATION":
      return action.data;
    case "RESET":
      return "";
    default:
      return state;
  }
};

export default reducer;
