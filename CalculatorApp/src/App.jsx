import "./App.css";
import Input from "./calcComponents/Input";
import DisplayButtons from "./calcComponents/DisplayButtons";
import History from "./calcComponents/CalcHistory";
import { useState } from "react";
function App() {
  let specialChracters = ["%", "/", "*", "+", "-", "."];
  let [buttonValue, changeButtonValue] = useState("0");
  let [currentResult, changeResult] = useState(false);
  let [previousResult, changePreviousResult] = useState(null);
  let onButtonClick = (buttonName) => {
    if (buttonValue.startsWith("0")) {
      buttonValue = buttonValue.slice(1, buttonValue.length);
    }
    if (currentResult) {
      changePreviousResult(buttonValue);
      if (!isNaN(buttonName)) {
        changeButtonValue(buttonName);
      } else {
        changeButtonValue("0");
      }
      changeResult(false);
      return;
    }

    let endsWithSpecial = specialChracters.some((elem) =>
      buttonValue.endsWith(elem)
    );
    if (buttonName === "C") {
      changeButtonValue("0");
    } else if (buttonName === "=") {
      let result = eval(buttonValue);
      changeButtonValue(parseFloat(result.toFixed(8)).toString());
      changeResult(true);
    } else if (buttonName === "←") {
      let newButtonValue = buttonValue.substring(0, buttonValue.length - 1);
      changeButtonValue(newButtonValue);
    } else {
      if (specialChracters.includes(buttonName)) {
        if (endsWithSpecial) {
          let newButtonValue = buttonValue.slice(0, -1) + buttonName;
          changeButtonValue(newButtonValue);
        } else {
          changeButtonValue(buttonValue + buttonName);
        }
      } else {
        changeButtonValue(buttonValue + buttonName);
      }
    }
  };

  return (
    <>
      <div className="w-full p-5 bg-black">
        <History previousResult={previousResult}></History>
        <Input buttonValue={buttonValue}></Input>
      </div>
      <div className="buttons-main grid grid-cols-4">
        <DisplayButtons onButtonClick={onButtonClick}></DisplayButtons>
      </div>
    </>
  );
}

export default App;
