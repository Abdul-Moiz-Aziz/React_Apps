import buttonStyle from "./ButtonStyle.module.css";
const DisplayButtons = ({ onButtonClick }) => {
  const buttonNames = [
    "←",
    "C",
    ".",
    "%",
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
    "00",
    "=",
    "+",
  ];

  return (
    <>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={buttonStyle.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </>
  );
};
export default DisplayButtons;
