import Display from "./Display";
import Button from "./Button";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key;
      if ("1234567890-+*/".includes(key)) {
        setInput((prev) => prev + key);
      } else if (key === "Enter") {
        handleButtonClick("=");
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        handleButtonClick("C");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const buttons = [
    "MC",
    "MR",
    "M+",
    "M-",
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
