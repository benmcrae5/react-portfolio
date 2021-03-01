import React from 'react';
import * as PAGES from "../pages";

const Nav = ({ handlePages, currentPage }) => {
    const tabNames = Object.keys(PAGES);
    console.log(currentPage);
    return (
        <ul className="nav container d-flex justify-content-around row">
            {tabNames.map( (tab) => (
                <li className="nav-item col-lg" key={tab}>
                    <a 
                        href={"#" + tab.toLowerCase()}
                        onClick={ () => handlePages(tab) }
                        className= { "py-2 d-none d-md-inline-block " 
                            + (currentPage === tab ? "active" : "") }
                    > {tab}
                    </a>
                </li>                )
            )}
        </ul>
    )
}

export default Nav;