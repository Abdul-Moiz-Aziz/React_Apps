import { useRef } from "react";
import { HiOutlineFolderAdd } from "react-icons/hi";

const UserInputs = ({ getUserInputs }) => {
  let inputName = useRef();
  let inputDate = useRef();
  const handleSubmission = (e) => {
    e.preventDefault();
    const exerName = inputName.current.value;
    const exerDate = inputDate.current.value;
    const currentDate = new Date().toISOString().split("T")[0];

    if (exerDate < currentDate) {
      alert("Please enter a future date");
      return;
    }
    if (exerName !== "" && exerDate !== "") {
      getUserInputs(exerName, exerDate);  
      inputName.current.value = "";
      inputDate.current.value = "";
    } else {
      alert("Please enter the valid data");
    }
  };
  return (
    <div className="mt-5 bg-white px-4 py-2 rounded-lg">
      <form
        action=""
        onSubmit={(e) => handleSubmission(e)}
        className="flex gap-5"
      >
        <input
          type="text"
          ref={inputName}
          placeholder="Enter exercise name here"
          className="focus:outline-none flex-1 px-4 text-darkBlue rounded-sm"
        />
        <input
          type="date"
          ref={inputDate}
          className=" focus:outline-none flex-1 px-4 py-1 text-darkBlue rounded-sm"
        />
        <button className="text-gray-500 text-2xl">
          <HiOutlineFolderAdd />{" "}
        </button>
      </form>
    </div>
  );
};
export default UserInputs;
