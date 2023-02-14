import React, { useEffect, useState } from "react";
import { dropdownOptionData, isOptionSelected } from "../utils";
function DropDownList({
  setDropdownSelectedList,
  setIsDropdownOpen,
  isDropdownOpen,
  dropdownSelectedList,
}) {
  const [selectedTempOptions, setSelectedTempOptions] = useState([]);

  const handleCheckBoxSelection = (isChecked, value) => {
    if (isChecked) {
      setSelectedTempOptions([...selectedTempOptions, value]);
    } else {
      let arr = [...selectedTempOptions];
      let index = selectedTempOptions.findIndex(
        (option) => option.id === value.id
      );
      arr.splice(index, 1);
      setSelectedTempOptions(arr);
    }
  };

  const handleSave = () => {
    setDropdownSelectedList([...selectedTempOptions]);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    setSelectedTempOptions([...dropdownSelectedList]);
  }, [isDropdownOpen]);

  return (
    <div className="dropdownListContainer">
      <div>
        {dropdownOptionData.map((value) => (
          <div>
            <label>
              <input
                type="checkbox"
                name={value.label}
                value={value.label}
                checked={isOptionSelected(value.id, selectedTempOptions)}
                onClick={(e) =>
                  handleCheckBoxSelection(e.target.checked, value)
                }
              />
              {value.label}
            </label>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setSelectedTempOptions([])}>Clear</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default DropDownList;
