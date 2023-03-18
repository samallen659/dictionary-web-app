import searchIcon from "../../assets/images/icon-search.svg";
import { useState } from 'react';

type AppProps = {
    search: Function
}



function SearchBar({ search }: AppProps) {
    const [searchValue, setSearchValue] = useState('');
    const [formError, setFormError] = useState(false);

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(searchValue === ""){
            setFormError(true);
            return;
        }
        setFormError(false);
        search(searchValue);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input type="search" id="default-search" className={`block w-full p-4 pl-10 lg:text-lg text-gray-900 dark:text-white border ${formError ? "border-red" : "border-gray-300 dark:border-gray-900"} rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600`} placeholder="Search for any word..." onChange={handleChange} formNoValidate />
                <button type="submit" className="text-white absolute top-1/2 right-2.5 transform -translate-x-1/2 -translate-y-1/2
 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"><img src={searchIcon} /></button>
            </div>
            <p className={`${formError ? "visible" : "invisible"} text-red lg:text-lg`}>Whoops, can't be empty...</p>
        </form>
    )
}

export default SearchBar;
