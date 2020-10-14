import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0));

  const handleSelected = () => {
    const rand = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(rand);
  };

  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected]++;

    setVotes(votesCopy);
  };

  const getMaxVoted = () => votes.indexOf(Math.max(...votes));

  console.log();
  return (
    <>
      <div>
        <h1>Anectode of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button text="Vote" onClick={handleVote} />
        <Button text="Next Anectode" onClick={handleSelected} />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[getMaxVoted()]}</p>
      </div>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code acounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans understand",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possiblei, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
