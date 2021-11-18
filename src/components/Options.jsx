export const Options = ({ question, i, setQuestions }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: 10,
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
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
          margin: "auto",
          fontSize: 10,
          color: "#999",
          fontWeight: "bold",
          borderRight: "1px solid #eee",
        }}
      >
        {i + 1}
      </div>
      <div style={{padding: "0 5px"}}>
        {["a", "b", "c", "d"].map((value) => (
          <button
            key={value}
            onClick={() => {
				setQuestions(prev => prev.map((e,j)=>i===j?(e===value?"":value):e))
			}}
            className={(value === question ? "active " : "") + "btn"}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
