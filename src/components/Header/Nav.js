import React from 'react';
import * as PAGES from "../pages";

console.log(Object.keys(PAGES));

const Nav = ({ handlePages, currentPage }) => {
    const tabNames = Object.keys(PAGES);
    return (
        <ul className="nav container d-flex justify-content-around">
            {tabNames.map( (tab) => (
                <li className="nav-item" key={tab}>
                    <a 
                        href={"#" + tab.toLowerCase()}
                        onClick={ () => handlePages(tab)}
                        className= { "py-2 d-none d-md-inline-block" 
                            + currentPage === tab ? "active" : "" }
                    > {tab}
                    </a>
                </li>
                )
            )}
        </ul>
    )
}

export default Nav;