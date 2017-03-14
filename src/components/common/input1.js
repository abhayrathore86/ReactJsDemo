import React from'react';

class Input1 extends React.Component{
	
	render(){
		var wrapperClass="form-group";
		if(this.props.error && this.props.error.length > 0){
			wrapperClass+= " " +
			 "has-error";
		}
		return (
			<div className={wrapperClass}>
			<label htmlFor={this.props.name}>{this.props.label}</label>
			<div className="field">
			<input type={this.props.type} 
				name={this.props.name}
				className="form-control"
				placeholder={this.props.placeholder}
				ref={this.props.name}
				id={this.props.id}
			/>
			<div className="input">{this.props.error}</div>
			</div>
			</div>
			)
	}
}

Input1.propTypes={
		name:React.PropTypes.string.isRequired,
		label:React.PropTypes.string.isRequired,
		type:React.PropTypes.string.isRequired,
		placeholder:React.PropTypes.string.isRequired,
		error:React.PropTypes.string

	}
module.exports=Input1;