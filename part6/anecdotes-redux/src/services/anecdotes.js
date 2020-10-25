import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res;
};

const addNew = async (content) => {
  const anecdote = { content, votes: 0 };
  const res = await axios.post(baseUrl, anecdote);
  return res;
};

const addVote = async (updatedAnecdote) => {
  const res = await axios.put(
    `${baseUrl}/${updatedAnecdote.id}`,
    updatedAnecdote
  );
  return res;
};

export default { getAll, addNew, addVote };
