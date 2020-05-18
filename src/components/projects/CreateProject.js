import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { withRouter } from 'react-router-dom';


class CreateProject extends Component {
	state = {
		name: '',
		image: '',
		address: ''
	}

	handleChange =(e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	
	handleSubmit =(e) => {
		e.preventDefault();
		//console.log(this.state);
		this.props.createProject(this.state)
		this.props.history.push('../');
	}


	
	render () {		
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="createForm">
					<h5 className="grey-text text-darken-3">Enter your details</h5>
					<div className="input-field">
						<i class="material-icons prefix">account_circle</i>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" onChange = {this.handleChange}/>
					</div>
					<div className="input-field">
						<i class="material-icons prefix">home</i>
						<label htmlFor="address">Address</label>
						<input type="text" id="address" onChange = {this.handleChange}></input>
					</div>
					<div className="input-field">
						<i class="material-icons prefix">insert_photo</i>
						<label htmlFor="photo">Path to the image</label>
						<input type="text" id="photo" onChange = {this.handleChange}></input>
					</div>
					
					<div className="input-field">
						<button className="btn waves-effect waves-light">Submit</button>
					</div>
				</form>
				<div className="input-field">
						<button className="waves-effect waves-light btn-large goback">
							<a href="../" className="goback"><h6 className="aaaa">Go back to home page</h6></a>
						</button>
				</div>
				
			
				
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject : (project) => dispatch(createProject(project))
	}
}

export default connect(null, mapDispatchToProps)(withRouter(CreateProject))

// <div class="file-field input-field">
// 						<div class="btn">
// 							<span>File</span>
// 							<input type="file"></input>
// 						</div>
// 						<div class="file-path-wrapper">
// 							<input class="file-path validate" type="text"></input>
// 						</div>
// 					</div>