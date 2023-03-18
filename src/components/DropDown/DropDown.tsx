import { useState } from "react";

type AppProps = {
    handleFontChange: Function;
}

function DropDown({ handleFontChange }: AppProps) {
    const [selected, setSelected] = useState(0);
    const fontDisplayOptions = ['Sans Serif', 'Serif', 'Mono'];
    const fontOptions = ['sans', 'serif', 'mono'];

    const handleClick = (e: any): void => {
        handleFontChange(e.target.value);
        setSelected(e.target.value);
    }

    return (
        <div>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black focus:outline-none font-medium rounded-lg lg:text-lg px-4 py-2.5 text-center inline-flex items-center dark:text-white" type="button">{fontDisplayOptions[selected]}</button>
            {/* Dropdown menu */}
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 shadow-gray-200 shadow-lg dark:shadow-purple">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {fontOptions.map((option, i) => (
                        <li key={i} className={`font-${fontOptions[i]} block lg:text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${selected === i && 'text-purple font-bold'}`} onClick={handleClick} value={i}>
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DropDown;
