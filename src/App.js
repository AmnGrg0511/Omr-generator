import { useEffect, useState } from "react";
import "./App.css";
import { Options } from "./components/Options";

function App() {
  const [number, setNumber] = useState(0);
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const calculate = () => {
    const net = {
      correct: 0,
      wrong: 0,
    };
    questions.forEach((q, i) => {
      if (q) {
        if (answers[i] === q) {
          net.correct++;
        } else {
          net.wrong++;
        }
      }
    });
    setScore(net);
  };

  useEffect(() => {
    if (remainingTime < 0) {
      setSubmitted(true);
    }
  }, [remainingTime])

  return (
    <div className="App">
      {questions.length === 0 && (
        <>
          <input
            type="number"
            placeholder="Number of questions"
            onChange={({ target: { value } }) => {
              if (value) setNumber(parseInt(value));
            }}
          />
          <input
            type="number"
            placeholder="Time (minutes)"
            onChange={({ target: { value } }) => {
              if (value) {
                setTime(60 * value);
                setRemainingTime(60 * value);
              }
            }}
          />
          <button
            className="btn btn-large"
            onClick={() => {
              if (number && time) {
                setQuestions(new Array(number).fill(""));
                setAnswers(new Array(number).fill(""));
                setInterval(
                  () => setRemainingTime(prev => prev - 1),
                  1000
                );
              }
            }}
          >
            Start
          </button>
        </>
      )}
      {submitted && score == null && (
        <div className="code">
          Mark correct answers
        </div>
      )}
      {score !== null && (
        <div
          className="code"
        >
          {[
            ["Total", score.correct * 4 - score.wrong, number * 4],
            ["Correct", score.correct],
            ["Incorrect", score.wrong],
            ["Unattempted", number - score.correct - score.wrong],
          ].map((e) => (
            <div>
              <span style={{ padding: "0 5px 0 20px" }}>{e[0]}</span>
              <span style={{ padding: 2, fontSize: 20 }}>{e[1]}</span>
              {e[2] !== undefined && (
                <span style={{ padding: "0 10px 0 5px" }}>/ {e[2]}</span>
              )}
            </div>
          ))}
        </div>
      )}
      {questions.length !== 0 && !submitted && (
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
            answers={answers}
            setAnswers={setAnswers}
            submitted={submitted}
            i={i}
          />
        ))}
      </div>

      {questions.length !== 0 && (
        <button
          className="btn btn-large"
          onClick={() => {
            submitted ? calculate() : setSubmitted(true);
          }}
        >
          {submitted ? "Calculate" : "Submit"}
        </button>
      )}
    </div>
  );
}

export default App;
