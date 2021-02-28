import React from 'react';
import Portfolio from './Portfolio';

const Homepage = () => {
    return (
        <section id="homepage" className="page">
            <h1>Welcome to My Digifolio!</h1>
            <p>I hope you're enjoying the page so far! 
                (That icon at the top is super awesome, don't you think?) 
                Feel free to browse around and see what you like! </p>
                <p>The <span className="span-emph">Portfolio</span> link above will take you 
                to the actual portfolio section with some of my projects so far.</p>
                <p>The <span className="span-emph">ReachOut</span> page is currently under construction, 
                but the link still works! </p>
                <p>And, in case you want to come back here, the <span className="span-emph">Homepage</span> link 
                is there for you. </p>
                <p>Have Fun!</p>
        </section>
    )
}

export default Homepage;