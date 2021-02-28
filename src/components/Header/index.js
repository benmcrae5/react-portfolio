import React  from 'react';
import { default as Nav } from "./Nav";
import signatureIcon from "../../assets/ben-sig-1.png";

const Header = ({ currentPage, handlePages }) => {

    return (
        <div className="App-header navbar flex-column">
            <img src={signatureIcon} alt="Image Not Found" />
            <Nav currentPage={currentPage} handlePages={handlePages}/>
        </div>
    )
}

export default Header;