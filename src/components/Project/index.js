import React from 'react';

const Project = ({snapshot_src, project_name, github_url, deployed }) => {
    

    return (
        <section className="col project-card">
            <div class="portfolio-grid-1" id="image-1">
                <a href={deployed}>
                    <img 
                        src={require(`../../assets/project-imgs/${snapshot_src}.PNG`).default} 
                        alt="Coming Soon!" 
                        className="project-img"
                        key={snapshot_src}
                    />
                    <p>
                        {project_name}
                    </p>
                </a>
            </div>
        </section>
    )
}

export default Project;