import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const evaluate = () => {
    let res = eval(equation);
    setResult(res);
  };

  const addToEquation = (value) => {
    if (!equation && (value == "*" || value == "/" || value == "+")) {
      window.alert("Can't perform the operation to a Null value");
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

  return (
    <>
      <div className="w-full h-full bg-teal-500 fixed grid md:grid-cols-8 md:gap-4 md:grid-rows-12">
        <div className="md:col-start-4 bg-black col-span-2 rounded-xl row-span-10 md:row-start-2 grid grid-rows-7 ">
          <div className=" row-span-2 bg-white  m-2 mb-0 rounded-t" id="screen">
            <div>{result}</div>
            <div>{equation}</div>
          </div>
          <div
            id="buttons"
            className=" row-span-5 bg-red-300 m-2 mt-0 rounded-b grid grid-rows-5 p-3"
          >
            <div className="grid grid-cols-2 gap-4 pt-2">
              <Button
                value="clear"
                className="rounded"
                onButtonClick={(e) => {
                  clear(e);
                }}
              />
              <Button
                value="/"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4 pt-2">
              <Button
                value="7"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="8"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="9"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="*"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4 pt-2">
              <Button
                value="4"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="5"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="6"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="+"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4 pt-2">
              <Button
                value="1"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="2"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="3"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="-"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
            </div>
            <div className="grid grid-cols-2 pt-2 gap-4">
              <Button
                value="0"
                className="rounded"
                onButtonClick={(e) => {
                  addToEquation(e);
                }}
              />
              <Button
                value="Result"
                className="rounded"
                onButtonClick={(e) => {
                  evaluate(e);
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
