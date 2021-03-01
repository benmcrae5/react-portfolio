import React from 'react';
import Project from "../Project";
import ProjectList from "../../assets/project-list.json";

console.log(ProjectList);

const Portfolio = () => {
    return (
        <section id="portfolio" className="page">
            <h1>Portfolio</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {ProjectList.map( (project) => (
                    <div className="col project-card">
                        <svg 
                            class="card-img-top" 
                            width="100%" height="225" 
                            xmlns={project.snapshot_src} 
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMid YMid slice"
                            focusable="false"
                        >
                            <title>{project.project_name}</title>
                            <rect width="100%" height="100%"><img src={project.snapshot_src} /></rect>
                            <text x="45%" y="50%" fill="#eceeef">{project.project_name}</text>
                        </svg>
                        <p 
                            key={project.project_name}
                            {...project}
                        > {project.project_name}
                        </p>
                    </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Portfolio;