import ItemStructure from "./TodoItem";

const DisplayItems = ({ handleDisplayItems, todoItems, getEditDetails }) => {
  return (
    <div>
      <ul className="flex flex-col gap-4 mt-5">
        {todoItems.map((item, index) => (
          <ItemStructure
            item={item}
            key={index}
            handleDisplayItems={handleDisplayItems}
            getEditDetails={getEditDetails}
          ></ItemStructure>
        ))}
      </ul>
    </div>
  );
};
export default DisplayItems;
