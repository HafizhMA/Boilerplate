import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../features/searchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        const inputValue = e.target.value;
        setSearchValue(inputValue);
        dispatch(setSearchInput(inputValue));
    };

    return (
        <header>
            <nav>
                <div>
                    <input
                        type="text"
                        placeholder="Cari..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        className="border border-gray-300 px-2 py-1 rounded-md ml-4"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
