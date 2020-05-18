import React, { Component } from 'react'
import Notifications from './Notifications.js'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose}  from 'redux'


let styles = {
    margin: 'auto',
	height: '200px'
  };

class Dashboard extends Component {
	render(){
		const {projects} = this.props
		return(
			<div className="dashboard container">
				<div style={styles}>
					<div className="col s12">
						<ProjectList projects={projects} />
						<div className="input-field">
							<button className="waves-effect waves-light btn-large goback">
								<a href="/add" className="goback"><h6 className="aaaa">ADD A NEW RECORD</h6></a>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		projects: state.firestore.ordered.projects
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{
		collection: 'projects'}
	])
)(Dashboard)