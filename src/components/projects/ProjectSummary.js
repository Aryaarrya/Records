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


// <div className="card z-depth-0 project-summary">
//       <div className="card-content grey-text text-darken-3">
//         <span className="card-title ">{project.name}</span>
// 		<p>{project.address}</p>
//         <p>Posted by The Net Ninja</p>
//         <p className="grey-text">3rd September, 2am</p>
//       </div>
//     </div>

// <div class="card">
// 			<div class="card-image waves-effect waves-block waves-light">
// 				<img class="activator" src="images/office.jpg"></img>
// 			</div>
// 			<div class="card-content">
// 				<span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
// 				<p><a href="#">This is a link</a></p>
// 			</div>
// 			<div class="card-reveal">
// 				<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
// 				<p>Here is some more information about this product that is only revealed once clicked on.</p>
// 			</div>
//   		</div>


//import React from 'react'
// import {Link} from 'react-router-dom'



// const ProjectSummary = ({project}) => {
//   return (
	  
// <div className="rec small">
// 	<div className="col s12 m7">
// 		<h2 className="header">{project.title}</h2>
// 		<div className="card horizontal">
// 			<div className="card-image">
// 				<img className="phuto" src={project.photo}></img>
// 			</div>
// 			<div className="card-stacked">
// 				<div className="card-content">
// 					<h6>{project.name}</h6>
// 					<p>{project.address}</p>
// 				</div>
// 				<div className="card-action">
// 					<a href='/'>More details</a>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
  
	 

	
	
//   )
// }

// export default ProjectSummary
