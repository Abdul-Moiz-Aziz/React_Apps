import { MdDeleteOutline } from "react-icons/md";

const ItemStructure = ({ item, handleDisplayItems }) => {
  return (
    <div className="flex w-11/12 mx-auto justify-between items-center rounded-2xl bg-white px-4 py-3">
      <p className="capitalize flex-1 text-lg font-medium text-gray-600">
        {item.name}
      </p>
      <div className="flex">
        <p className="mr-4 font-medium text-gray-600">{item.date}</p>
        <button
          onClick={() => handleDisplayItems(item.name)}
          className="text-xl text-gray-500"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};
export default ItemStructure;
