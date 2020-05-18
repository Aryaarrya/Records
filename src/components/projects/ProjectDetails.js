//responsibe for each individual page that we get

import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  const { project } = props;
  const id = props.match.params.id;
  if (project) {
    return (
		<div class="container section project-details">
			<div class="col s12 m7 indirec">
				<h4 class="header">INDIVIDUAL RECORDS</h4>
				<div class="card horizontal">
					<div class="card-image">
						<img className="indiphoto" src={project.photo}></img>
					</div>
					<div class="card-stacked">
						<div class="card-content">
							<h6 className="namehome"><i class="material-icons small prefix details">account_circle</i>  {project.name}</h6>
          					<p className="addresshome"><i class="material-icons small details">home</i>  {project.address}</p>
						</div>
						<div class="card-action">
							<p>Posted by Anonymous</p>
							<p>Record #{id}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}



// <div className="card z-depth-0">
// 					<div className="card-content">
// 						<span className="card-title">{project.name}</span>
// 						<p>{project.address}</p>	
// 					</div>
// 					<div className="card-action gret lighten-4 grey-text">
// 						<div>Posted by the Net Ninja</div>
// 						<div>2nd September, 2AM</div>
// 					</div>
// 				</div>


const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)

// import React from 'react' 
// import {connect} from 'react-redux'
// import {firestoreConnect} from 'react-redux-firebase'
// import {compose} from 'redux'


// const ProjectDetails = (props) => {
// 	const {project} = props;
// 	const id = props.match.params.id;
// 	if(project) {
// 		return (
			
// 		)		
// 	} else {
// 		return(
// 		<div className="container center">
// 			<p>Loading ....</p>	
// 		</div>	
// 		)
// 	}
// }

// const mapStateToProps = (state,ownProps) => {
// 	const id = ownProps.matcg.params.id;
// 	const projects = state.firestore.data.projects;
// 	const project = projects ? projects[id] : null
// 	return {
// 		project: project
// 	}
// }

// export default compose(
// 	connect(mapStateToProps),
// 	firestoreConnect([
// 		{collection: 'projects'}
// 	])
// )(ProjectDetails)