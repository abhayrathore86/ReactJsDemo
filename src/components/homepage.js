import React from'react';
import { Link} from 'react-router'
class Home extends React.Component{
	render(){
		return (
			<div className='jumbotron'>
				<h1>React Test</h1>
				<p>This demo is using React,React Router and flux</p><br/>
				<Link to="about"><button className='btn btn-primary btn-lg'>Learn More</button></Link>
			</div>
			);
	}
}

export default Home;