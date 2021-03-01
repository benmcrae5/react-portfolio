import React  from 'react';
import { default as Nav } from "./Nav";
import signatureIcon from "../../assets/ben-sig-1.png";

const Header = ({ currentPage, handlePages }) => {
    console.log(currentPage);
    return (
        <div className="App-header navbar flex-column flex-wrap">
            <img src={signatureIcon} alt="Image Not Found" />
            <Nav currentPage={currentPage} handlePages={handlePages}/>
        </div>
    )
}

export default Header;