import React, { useState } from 'react'
import { IonPage, IonContent } from '@ionic/react';
import SearchInput from '../../components/SearchInput/SeachInput'
import Suggestions from '../../components/Suggestions/Suggestions'
require('./Search.css');

const Search: React.FC = () => {

    //states
    const [input, setInput] = useState("");
    const [options, setOptions] = useState(["shorts", "accesories", "jeans", "shoes", "caps", "shirts"]);

    //handlers
    function changeInput(e: any) {
        setInput(e.target.value);
    }

    function filterSuggest(e: any) {
        setInput(e.target.innerHTML);
        setOptions(options.filter((value, index, arr) => {
            return value !== e.target.innerHTML.toLowerCase();
        }))
    }

    return (
        <IonPage id="search-page">

            <IonContent>
                <SearchInput inputValue={input} handleChange={changeInput} />
                <Suggestions options={options} handleClick={filterSuggest} />

            </IonContent>
        </IonPage>
    )
}

export default Search;