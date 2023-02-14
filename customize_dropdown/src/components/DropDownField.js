import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function DropDownField({
  dropdownSelectedList,
  setDropdownSelectedList,
  handleDropDownButton,
}) {
  const onRemove = (dropdownValue, index) => {
    const newDropdownSelectedList = [...dropdownSelectedList];
    const deleteSelectedOption = newDropdownSelectedList[index];
    const indexValue = newDropdownSelectedList.indexOf(deleteSelectedOption);
    if (newDropdownSelectedList) {
      newDropdownSelectedList.splice(indexValue, 1);
    }
    setDropdownSelectedList(newDropdownSelectedList);
  };
  return (
    <div className="DropDownContainer">
      <div className="DropDownField">
        {dropdownSelectedList.map((value, index) => (
          <span className="dropdownSelectedOptions">
            {value.label}
            <AiOutlineClose
              onClick={() => {
                onRemove(value, index);
              }}
            />
          </span>
        ))}
      </div>
      <button>
        <FaCaretDown onClick={handleDropDownButton} />
      </button>
    </div>
  );
}

export default DropDownField;
