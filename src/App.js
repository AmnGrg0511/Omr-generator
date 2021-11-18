import { useState } from "react";
import "./App.css";
import { Options } from "./components/Options";

function App() {
  const [number, setNumber] = useState(0);
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [questions, setQuestions] = useState([]);
  console.log({ questions });

  return (
    <div className="App">
      {remainingTime === 0 && (
        <>
          <input
            type="number"
            placeholder="Enter number of questions"
            style={{ padding: 10, margin: 10, height: 20 }}
            onChange={({ target: { value } }) => {
              if (value) setNumber(parseInt(value));
            }}
          />
          <input
            type="time"
            placeholder="Time"
            style={{ padding: 10, margin: 10, height: 20 }}
            onChange={({ target: { value } }) => {
              if (value) {
                const [hours, minutes] = value
                  .split(":")
                  .map((e) => parseInt(e));
                setTime(60 * (60 * hours + minutes));
              }
            }}
          />
          <button
            style={{
              padding: 10,
              margin: 10,
              height: 44,
              display: "inline-block",
              width: 100,
            }}
            className="btn"
            onClick={() => {
              if (number && time) {
                setQuestions(new Array(number).fill(""));
                setInterval(
                  () => setRemainingTime((prev) => (prev ? prev - 1 : time)),
                  1000
                );
              }
            }}
          >
            Start
          </button>
        </>
      )}
      {remainingTime !== 0 && (
        <div
          style={{
            position: "sticky",
            top: 0,
            padding: "20px 0",
            width: "100%",
            backgroundColor: "#fafbfc",
          }}
        >
          <div
            style={{
              width: "60%",
              margin: "0 auto 20px",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                backgroundColor: "#39b9df",
                height: 5,
                width: `${
                  (questions.filter((e) => e !== "").length / number) * 100
                }%`,
              }}
            ></div>
          </div>
          <div
            style={{
              width: "80%",
              margin: "auto",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                backgroundColor: "#39df92",
                height: 5,
                width: `${(remainingTime / time) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      )}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {questions.map((question, i) => (
          <Options
            key={i}
            question={question}
            setQuestions={setQuestions}
            i={i}
          />
        ))}
      </div>

      {remainingTime !== 0 && (
        <button
          style={{
            padding: 10,
            margin: 10,
            height: 44,
            display: "inline-block",
            width: 100,
          }}
          className="btn"
          onClick={() => {
            if (number && time) {
              setQuestions(new Array(number).fill(""));
              setInterval(
                () => setRemainingTime((prev) => (prev ? prev - 1 : time)),
                1000
              );
            }
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default App;
