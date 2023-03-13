import { useState } from "react";

function DropDown() {
  const [selected, setSelected] = useState(0);
  const fontOptions = ['Sans Serif', 'Serif', 'Mono'];
  
  const handleClick = (e: any): void => {
    setSelected(e.target.value);
  }

  return (
    <div>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{fontOptions[selected]}</button>
      {/* Dropdown menu */}
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {fontOptions.map((option, i) => (
            <li key={i} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClick} value={i}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropDown;
