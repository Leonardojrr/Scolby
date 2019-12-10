import React from 'react'
require('./Suggestions.css');

type Iprops = {
    options: string[],
    handleClick: any
}

const Suggestions: React.FC<Iprops> = ({ options, handleClick }) => {

    return (
        <div id="suggestions">
            {options.map((item) => {
                return (
                    <div className="option" onClick={handleClick}>
                        <span>{item[0].toUpperCase() + item.substr(1, item.length)}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Suggestions;