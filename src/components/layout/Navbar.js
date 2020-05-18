import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'

const Navbar = () => {
	return (
		<nav className="nav-wrapper purple darken-2">
			<div className="container">
				<Link to='/' className= "brand-logo">RECORDS<i class="material-icons right large">chrome_reader_mode</i></Link>
				<SignedInLinks />		
				<SignedOutLinks />
			</div>
		</nav>
	)
}

export default Navbar;