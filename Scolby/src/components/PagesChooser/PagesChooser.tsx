import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom';
require('./PagesChooser.css')



const PagesChooser: React.FC = () => {

    const [page, setPage]: any = useState(null)

    useEffect(() => {
        if (page === null) {
            setPage(document.getElementById("home_button"))
        } else {
            page.classList.remove("disable");
            page.classList.add("enable");
        }
    }, [page]);

    function enableButton(e: any) {
        let button_clicked: HTMLElement = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if (button_clicked.tagName !== "DIV") {
            button_clicked = e.target.parentNode.parentNode.parentNode
        }
        if (button_clicked.classList[1] === "enable") {

        }
        else {
            page.classList.remove("enable");
            page.classList.add("disable");
            setPage(button_clicked);
        }

    }

    return (

        <div id="chooser_container">

            <Link to="/dashboard/bag">
                <div id="bag_button" className="chooser_button disable" onClick={enableButton}>
                    <ReactSVG src={require("../../media/Buttons/Bag_button.svg")} />
                </div>
            </Link>

            <Link to="/dashboard/home">
                <div id="home_button" className="chooser_button disable" onClick={enableButton} >
                    <ReactSVG src={require("../../media/Buttons/Home_button.svg")} />
                </div>
            </Link>

            <Link to="/dashboard/search">
                <div id="search_button" className="chooser_button disable" onClick={enableButton}>
                    <ReactSVG src={require("../../media/Buttons/Search_button.svg")} />
                </div>
            </Link>

            <Link to="/dashboard/profile">
                <div id="profile_button" className="chooser_button disable" onClick={enableButton}>
                    <ReactSVG src={require("../../media/Buttons/Profile_button.svg")} />
                </div>
            </Link>

        </div >
    )
};

export default PagesChooser;