var React=require('react');


var About=React.createClass({
	static: {
    willTransitionTo: function (transition) {
      alert('hii');
    }
  },
	render:function(){
		return (
			<div>
			<h1>About</h1>
			<p>
				This application uses following technologies:
			</p>
			<ul>
				<li>React</li>
				<li>React Router</li>
				<li>Flux</li>
				<li>Node</li>
				<li>Gulp</li>
				<li>Browserify</li>
				<li>Bootstrap</li>
			</ul>
		
			</div>
			);
	}
});

module.exports=About;