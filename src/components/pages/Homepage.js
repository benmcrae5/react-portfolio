import React from 'react';
import Portfolio from './Portfolio';
import photo from "../../assets/ben-photo-cropped.jpg";

const Homepage = ({ handlePages, currentPage }) => {
    return (
        <section id="homepage" className="page row">
            <div className="homepage-title">
                <img src={photo} />
                <h1>Welcome to My Digifolio!</h1>
            </div>
            <p>I hope you're enjoying the page so far! 
                (That icon at the top is super awesome, don't you think?) 
                Feel free to browse around and see what you like!</p>
            <p>The <a href="#portfolio" className="span-emph" onClick={ () => handlePages("Portfolio")} >Portfolio</a> link 
                above will take you to the actual portfolio section with some of my projects so far.</p>
            <p>The <a href="#reachout" className="span-emph" onClick={ () => handlePages("ReachOut")} >ReachOut</a> page 
                is currently under construction, but the link still works!</p>
            <p>And, in case you want to come back here, the <span className="span-emph">Homepage</span> link 
                is there for you.</p>
            <p>Have Fun!</p>
        </section>
    )
}

export default Homepage;