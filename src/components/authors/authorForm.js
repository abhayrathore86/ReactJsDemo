import React from'react';
import Input from '../common/input';
class AuthorForm extends React.Component{
	render() {
		return (
			<div>
			<form id="authForm" onSubmit={this.props.onSave}>
				<h1>Manage Author</h1>
				<Input type="text" name="firstName"  placeholder="First Name" label="First Name"   />
				<Input type="text" name="lastName" placeholder="Last Name" label="Last Name"    />
				<Input type="number" name="age" placeholder="Age" label="Age"  />
				{/*<label className="control-label">Upload Profile Image</label>
				<input id="input-1" type="file" name="profile" className="file" ref="profile" onChange={this.props.onChange}/>
				<br/>*/}
				<input type="submit" value="Save" id="save_btn" className="btn btn-default" />
			</form>
			</div>
		);
	}
}
export default AuthorForm;