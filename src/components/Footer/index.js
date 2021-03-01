import React from 'react';
import GithubSymbol from "../../assets/GitHub-Mark-120px-plus.png";
import LinkedInSymbol from "../../assets/In-Blue-Logo.png.original.png";

const Footer = () => {
    return (
        <section className="App-footer d-flex flex-row">
            <p>This is a footer! Wazzap??</p>
            <a href="https://github.com/benmcrae5" target="_blank">
                Ben's Github:   
                <img src={GithubSymbol} className="icon-class" />
            </a>
            <a href="https://www.linkedin.com/in/ben-mcrae" target="_blank">
                Ben's LinkedIn:  
                <img src={LinkedInSymbol} className="icon-class" />
            </a>
        </section>
    )
}

export default Footer;