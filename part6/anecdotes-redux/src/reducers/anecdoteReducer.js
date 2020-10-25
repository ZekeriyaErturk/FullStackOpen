import anecdoteService from "../services/anecdotes";

export const addVote = (anecdote) => async (dispatch) => {
  const res = await anecdoteService.addVote(anecdote);
  dispatch({
    type: "VOTE",
    data: res.data,
  });
};

export const createAnecdote = (data) => async (dispatch) => {
  const res = await anecdoteService.addNew(data);
  dispatch({
    type: "ADD",
    data: res.data,
  });
};

export const initAnecdotes = (data) => async (dispatch) => {
  const res = await anecdoteService.getAll();
  dispatch({
    type: "INIT_ANECDOTES",
    data: res.data,
  });
};

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.data;
    case "VOTE":
      const id = action.data.id;
      const anectode = state.find((a) => a.id === id);
      const newAnectod = {
        ...anectode,
        votes: anectode.votes + 1,
      };
      return state.map((a) => (a.id !== id ? a : newAnectod));
    case "ADD":
      return [...state, action.data];
    default:
      return state;
  }
};

export default reducer;
