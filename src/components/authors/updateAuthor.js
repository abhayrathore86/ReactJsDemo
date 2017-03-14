 /* eslint-disable */
var React=require('react');
var UpdateAuthorForm=require('./updateAuthorForm');
import axios from 'axios';
import {browserHistory} from 'react-router';
var toastr = require('toastr');
var UpdateAuthor=React.createClass({
	getInitialState: function () {
        return {
           author:[],
            errors: {firstName: '', lastName: '', age: ''/*,profile:''*/}/*
             dirty:false*/
        };
    },
    componentDidMount:function(){
    	var authorId=this.props.params.id;
    	//console.log(authorId);
    	axios.get('http://localhost:3001/api/data?id='+authorId)
		 .then(res => {
		 	this.setState({author:res.data[0]});
		 	//console.log(this.state.author.firstName)
		 	document.getElementById('fn').value=this.state.author.firstName;
		 	document.getElementById('ln').value=this.state.author.lastName;
		 	document.getElementById('age').value=this.state.author.age;
		 });
    },
    updateData:function(e){
    	e.preventDefault();
    	var data={};
        data['firstName']=e.target.firstName.value;
        data['lastName']=e.target.lastName.value;
        data['age'] = e.target.age.value;
        this.setState({author:data});
      //  console.log(this.state.author);
        //validate data
        var validForm = true;
        this.state.errors = {
            firstName: '', lastName: '', age: ''/*,profile:''*/
        };
        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First Name must be atleast 3 characters!';
            validForm = false;
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last Name must be atleast 3 characters!';
            validForm = false;
        }
        if (this.state.author.age == 0 || this.state.author.age.length > 2) {
            this.state.errors.age = 'Enter valid age!';
            validForm = false;
        }
        if (!validForm) {
            toastr.warning('Warning:Can not update data:' + (this.state.errors.firstName != '' ? '<br/>' : '') + this.state.errors.firstName + (this.state.errors.lastName != '' ? '<br/>' : '') + this.state.errors.lastName + (this.state.errors.age != '' ? '<br/>' : '') + this.state.errors.age/*+(this.state.errors.profile != ''?'<br/>':'')+this.state.errors.profile*/);
            return;
        }
        axios.put('http://localhost:3001/api/data?id='+this.props.params.id, data)
        .then(function(response){
		     toastr.success(response.data);
		  });

       /* if (this.saveAuthor(this.state.author)) {
            toastr.success('Author updated successfully !'); // display notification toast
        }*/

        //console.log(this.props.router);
        browserHistory.push('/authors/');//redirect to author page
       // window.location.reload();


    },
	render: function() {
		return (
			<div>
			<UpdateAuthorForm errors={this.state.errors} onUpdate={this.updateData}/>
			</div>
		);
	}
});

module.exports=UpdateAuthor;