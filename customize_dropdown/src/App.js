import React, { useState } from "react";
import "./App.css";
import DropDownField from "./components/DropDownField";
import DropDownList from "./components/DropDownList";
function App() {
  const [dropdownSelectedList, setDropdownSelectedList] = useState([]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropDownButton = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="App">
      <DropDownField
        dropdownSelectedList={dropdownSelectedList}
        setDropdownSelectedList={setDropdownSelectedList}
        handleDropDownButton={handleDropDownButton}
      />
      {isDropdownOpen && (
        <DropDownList
          setDropdownSelectedList={setDropdownSelectedList}
          setIsDropdownOpen={setIsDropdownOpen}
          isDropdownOpen={isDropdownOpen}
          dropdownSelectedList={dropdownSelectedList}
        />
      )}
    </div>
  );
}

export default App;
