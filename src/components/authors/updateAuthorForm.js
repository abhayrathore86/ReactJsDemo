var React=require('react');
var Input1=require('../common/input1');
var updateAuthorForm=React.createClass({
	render: function() {
		return (
			<div>
				<form id="authForm" onSubmit={this.props.onUpdate}>
					<h1>Update Author</h1>
					<Input1 label="First Name" type="text" name="firstName" placeholder="First Name" error={this.props.errors.firstName} id="fn"/>
					<Input1 label="Last Name" type="text" name="lastName" placeholder="Last Name" error={this.props.errors.lastName} id="ln"/>
					<Input1 label="Age" type="number" name="age" placeholder="Age" error={this.props.errors.age} id="age"/>
					<input type="submit" value="Update" id="save_btn" className="btn btn-default" />
				</form>
			</div>
		);
	}
});

module.exports=updateAuthorForm;