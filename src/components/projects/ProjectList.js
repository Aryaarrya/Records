import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProjectList = ({projects}) => {
	return (
		<div className="project-list section">
			<Carousel className="hoverable">
			{ projects && projects.map(project => {
				return (
					<Link to={'/project/' + project.id}>
						<ProjectSummary project={project} key={project.id} />
					</Link>
				)
				
			}) }
			</Carousel>
		</div>	
		
	)
	
}

export default ProjectList