import React from 'react'

const ProjectSummary = ({project}) => {
  return (

<div className="card record hoverable">
    <div className="col s12 m7 record">
    <div className="card horizontal">
      <div className="card-image">
		  <img className="homeimgs " src={project.photo}></img>
      </div>
      <div className="card-stacked">
        <div className="card-content">
		  <h6 className="namehome truncate"><i class="material-icons small prefix details">account_circle</i>  {project.name}</h6>
          <p className="addresshome hide-on-small-only"><i class="material-icons small details">home</i>  {project.address}</p>
        </div>
        <div className="card-action">
          <a href="#">MORE INFO</a>
        </div>
      </div>
    </div>
  </div>
	  </div>
  )
}

export default ProjectSummary


