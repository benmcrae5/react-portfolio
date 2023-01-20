import React from 'react';
import Project from "../Project";
import ProjectList from "../../assets/project-list.json";

const Portfolio = () => {
    return (
        <section id="portfolio" className="page row">
            <h1>Portfolio</h1>
            <p>click the image to go to the deployed site!</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {ProjectList.map( (project) => (
                    <Project key={project.project_name} {...project}/>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;