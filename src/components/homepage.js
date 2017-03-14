var React=require('react');
import { Link} from 'react-router'
var Home=React.createClass({
	render:function(){
		return (
			<div className='jumbotron'>
				<h1>React Test</h1>
				<p>This demo is using React,React Router and flux</p><br/>
				<Link to="about"><button className='btn btn-primary btn-lg'>Learn More</button></Link>
			</div>
			);
	}
});

module.exports=Home;