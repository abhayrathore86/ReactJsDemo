import React from'react';
import {Link} from 'react-router'

class notFoundPage extends React.Component{
	render(){
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Whoops! Sorry, there is nothing to see here</p>
				<p><Link to='/'>Back To Home</Link></p>
			</div>
			);
	}
}

export default notFoundPage;