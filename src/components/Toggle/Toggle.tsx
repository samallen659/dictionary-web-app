import moonIcon from "../../assets/images/icon-moon.svg";
import { useState } from "react";


function Toggle() {
    const [darkMode, setDarkMode] = useState(false);
   
    const handleChange = ():void => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
        document.body.classList.toggle('bg-grey-700');
    }

    return (
        <div>
            <label className="relative inline-flex items-center cursor-pointer" >
                <input type="checkbox" onChange={handleChange} value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><img src={moonIcon} /></span>
            </label>
        </div >
    )
}

export default Toggle;
