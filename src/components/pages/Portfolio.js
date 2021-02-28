import React from 'react';
import Project from "../Project";
import ProjectList from "../../assets/project-list.json";

console.log(ProjectList);

const Portfolio = () => {
    return (
        <section id="portfolio" className="page">
            <h1>Portfolio</h1>
            {ProjectList.map( (project) => (
                <p 
                    key={project.project_name}
                    {...project}
                > {project.project_name}
                </p>
                )
            )}
        </section>
    )
}

export default Portfolio;