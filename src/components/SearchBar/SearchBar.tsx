import searchIcon from "../../assets/images/icon-search.svg";
import { useState } from 'react';

type AppProps = {
    search: Function
}



function SearchBar({ search }: AppProps) {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        search(searchValue);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-900" placeholder="Search for any word..." onChange={handleChange} required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"><img src={searchIcon} /></button>
            </div>
        </form>
    )
}

export default SearchBar;
