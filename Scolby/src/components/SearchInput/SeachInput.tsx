import React from 'react'
import { ReactSVG } from 'react-svg'
require('./SearchInput.css');

type IProps = {
    inputValue: string,
    handleChange: any
}

const SearchInput: React.FC<IProps> = ({ inputValue, handleChange }) => {

    function changeIconColor() {
        let icon: any = document.getElementById("search-icon");
        if (icon.classList[0] === "disable") {
            icon.classList.remove("disable");
            icon.classList.add("enable");
        }
        else {
            icon.classList.remove("enable");
            icon.classList.add("disable");
        }
    }

    return (
        <div id="search-header">
            <input id="search-input" onFocus={changeIconColor} onBlur={changeIconColor} type="text" value={inputValue} onChange={handleChange} placeholder="Search something..." />
            <div id="search-icon" className="disable">
                <ReactSVG src={require('../../media/icons/search_icon.svg')} />
            </div>
        </div>
    )
}

export default SearchInput;