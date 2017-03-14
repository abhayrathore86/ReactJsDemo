var React=require('react');
import {Link} from 'react-router'
var Header=React.createClass({
	render:function(){
		return (
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<a href='/' className='navbar-brand'>
						<img src='/pic1.jpg' height='30' width='30' alt='logo'/>
					</a>
					<ul className='nav navbar-nav'>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/authors">Authors</Link></li>
					<li><Link to="/addAuthor">Add Author</Link></li>
					<li><Link to="/test">Test</Link></li>
					</ul>
				</div>

			</nav>
			);
	}
});

module.exports=Header;