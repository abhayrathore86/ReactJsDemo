var React=require('react');
var Header=require('./common/header');
var RouteHandler=require('react-route').RouteHandler;
var browserHistory=Router.browserHistory;
var App=React.createClass({
	render:function(){
		return (
			<div>
			<Header />
			<RouteHandler/>
			</div>
			);
	}
});
module.exports=App;