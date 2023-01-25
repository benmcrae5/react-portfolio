import React  from 'react';
import * as PAGES from "../pages";

const Menu = ({ handlePages, currentPage}) => {
    const [navBarOpen, setNaveBarOpen] = useState(false);
    const tabNames = Object.keys(PAGES);
    const handleToggle = () => {
        setNaveBarOpen(!navBarOpen);
    }
    return (
        <nav className="nav-menu">
            <button onClick={handleToggle}>{navBarOpen ? "Close" : "Open"}</button>
            <ul className="nav container d-flex justify-content-around column">
                {tabNames.map( (tab) => (
                    <li className="nav-item col-lg" key={tab}>
                        <a 
                            href={"#" + tab.toLowerCase()}
                            onClick={ () => handlePages(tab) }
                            className= { "py-2 d-none d-md-inline-block nav-link " 
                            + (currentPage === tab ? "active" : "") }
                            > {tab}
                        </a>
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}