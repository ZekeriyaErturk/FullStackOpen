import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Statistics = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => setGood(good + 1);
  const clickNeutral = () => setNeutral(neutral + 1);
  const clickBad = () => setBad(bad + 1);

  let all = good + bad + neutral;
  let average = (good * 1 + bad * -1) / all;
  let positive = good === 0 ? 0 : (good / all) * 100;
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={clickGood} text="good" />
      <Button onClick={clickNeutral} text="neutral" />
      <Button onClick={clickBad} text="bad" />
      <div>
        <h2>Statistics</h2>
        {good || neutral || bad ? (
          <table>
            <tbody>
              <Statistics text="good" value={good} />
              <Statistics text="neutral" value={neutral} />
              <Statistics text="bad" value={bad} />
              <Statistics text="all" value={all} />
              <Statistics text="average" value={average.toFixed(2)} />
              <Statistics text="positive" value={positive.toFixed(2)} />
            </tbody>
          </table>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
