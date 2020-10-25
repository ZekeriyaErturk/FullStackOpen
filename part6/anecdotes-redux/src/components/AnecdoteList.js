import React from "react";
import { connect } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote: { id, content, votes }, vote }) => {
  return (
    <>
      <div>{content}</div>
      <div>
        has {votes}
        <button onClick={() => vote(id)}>vote</button>
      </div>
    </>
  );
};

const AnecdoteList = ({ anecdotes, filterWord, setNotification, addVote }) => {
  const vote = (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    const updatedAnecdote = {
      content: anecdote.content,
      id: anecdote.id,
      votes: anecdote.votes + 1,
    };
    addVote(updatedAnecdote);
    setNotification(`you voted '${anecdote.content}'`, 1);
  };

  if (filterWord !== null)
    anecdotes = anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filterWord.toLowerCase())
    );

  return (
    <>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />
        ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filterWord: state.filter,
  };
};

export default connect(mapStateToProps, { setNotification, addVote })(
  AnecdoteList
);
