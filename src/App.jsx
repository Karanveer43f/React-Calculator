import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");
  const buttonsClass =
    "rounded-xl bg-[#FCF4E5] border-[3px] md:border-2 border-[#2D342C] shadow-[3px_4px_#2D342C] md:shadow-[3px_3px_#2D342C] font-bold uppercase rubik-kv text-3xl md:text-base";
  const evaluate = () => {
    let res = eval(equation);

    // Check if the result is a floating-point number
    if (Number.isInteger(res)) {
      // If it's an integer, set it directly
      setResult(res.toString());
    } else {
      // If it's a floating-point number, limit it to three decimal places
      res = res.toFixed(3);
      setResult(res);
    }
  };

  const addToEquation = (value) => {
    //operating on null value
    if (!equation && (value == "*" || value == "/" || value == "+")) {
      window.alert("Can't perform the operation to a Null value");
      return;
    }
    //using 2 operators together
    let last = equation[equation.length - 1];
    if (
      (last == "*" || last == "/" || last == "+" || last == "-") &&
      (value == "*" || value == "/" || value == "+" || value == "-")
    ) {
      window.alert("Can't operate on two operators");
      return;
    }

    let tempEquation = equation;
    tempEquation += value;
    setEquation(tempEquation);
  };

  const clear = () => {
    setEquation("");
    setResult("");
  };

  const erase = () => {
    if (!equation) {
      window.alert("Can't erase empty equation");
      return;
    }
    let newEquation = equation.slice(0, -1);
    setEquation(newEquation);
  };

  return (
    <>
      <div className="w-full h-full bgw fixed grid md:grid-cols-8 md:grid-rows-12">
        <div
          className="md:col-start-4 bg-[#FCF4E5] col-span-2 md:rounded-xl row-span-10 md:row-start-2 grid grid-rows-7 border-4 
        border-[#2D342C] shadow-[6px_6px_#2D342C] "
        >
          <div
            className=" row-span-2  mb-0 rounded-t-2xl grid grid-rows-3 p-4 text-[#2D342C] rubik-kv"
            id="screen"
          >
            <div className="row-span-2 text-7xl md:text-6xl font-bold flex items-center justify-end">
              {result}
            </div>
            <div className="row-span-1 flex items-center justify-end text-2xl md:text-base ">
              {" "}
              {equation}
            </div>
          </div>
          <div
            id="buttons"
            className=" row-span-5 bg-[#B8F3D7] mt-0 rounded-t-2xl rounded-b-xl grid grid-rows-5 p-3"
          >
            <div className="grid grid-cols-2 gap-5 pt-4 ">
              <Button
                value="clear"
                className={buttonsClass}
                onButtonClick={(e) => {
                  clear(e);
                }}
              />
              <Button
                value="Erase"
                className={buttonsClass}
                onButtonClick={(e) => {
                  erase(e);
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-5 pt-4">
              <Button
                value="7"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="8"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="9"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="/"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-5 pt-4">
              <Button
                value="4"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="5"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="6"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="*"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-5 pt-4">
              <Button
                value="1"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="2"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="3"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="+"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-5 pt-4">
              <Button
                value="Result"
                className={`col-span-2 ${buttonsClass}`}
                onButtonClick={(e) => {
                  evaluate(e);
                }}
              />
              <Button
                value="0"
                className={buttonsClass}
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                className={buttonsClass}
                value="-"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
