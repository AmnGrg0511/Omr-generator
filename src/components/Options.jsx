export const Options = ({
  i,
  question,
  setQuestions,
  answers,
  setAnswers,
  submitted,
}) => {
  return (
    <div
      style={{
        display: "flex",
        margin: 10,
        boxShadow: `#${
          answers[i] ? (answers[i] !== question ? "cf1b1bee" : "09c149ee" ): "0000001d"
        } 0px 0px 10px`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
          width: 25,
          height: "100%",
          fontSize: 10,
          color: "#999",
          fontWeight: "bold",
          borderRight: "1px solid #eee",
        }}
      >
        {i + 1}
      </div>
      <div style={{ padding: "0 5px" }}>
        {["a", "b", "c", "d"].map((value) => (
          <button
            key={value}
            onClick={() => {
              submitted
                ? setAnswers((prev) =>
                    prev.map((e, j) =>
                      i === j ? (e === value ? "" : value) : e
                    )
                  )
                : setQuestions((prev) =>
                    prev.map((e, j) =>
                      i === j ? (e === value ? "" : value) : e
                    )
                  );
            }}
            style={{
              backgroundColor: value === answers[i] ? "#28be72" : "",
            }}
            className={
              (value === question || value === answers[i] ? "active " : "") +
              "btn"
            }
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
