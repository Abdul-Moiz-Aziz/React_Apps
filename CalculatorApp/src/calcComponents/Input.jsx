const Input = ({ buttonValue }) => {
  return (
    <input
      className="bg-black text-right w-full focus:outline-none text-4xl text-white h-10 mt-2 input"
      value={buttonValue}
      readOnly
    ></input>
  );
};
export default Input;
