import Display from "./Display";
import Button from "./Button";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <Button key={idx} value={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
}
