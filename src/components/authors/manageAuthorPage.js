
var React = require('react');
var _ = require('lodash');
var AuthorForm = require('./authorForm');
import {browserHistory} from 'react-router';
var toastr = require('toastr');
import axios from 'axios';
var _generateId = function (author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};
var ManageAuthorPage = React.createClass({

    getInitialState: function () {
        return {
            author: {firstName: '', lastName: '', age: ''/*,profile:''*/},
            errors: {firstName: '', lastName: '', age: ''/*,profile:''*/}/*
             dirty:false*/
        };
    },
    /*
     componentWillMount:function(){

     var authorId=this.props.params.id;
     console.log(this.props.params.id);
     if(authorId){
     axios.get('http://localhost:3001/api/data?id='+authorId)
     .then(res => {
     this.setState({ author: res.data },()=>{
     console.log(this.state.author);
     });

     })
     }


     },*/
    /*componentWillUpdate:function() {
     console.log('a='+this.state.dirty)
     if(this.state.dirty){
     this.props.router.setRouteLeaveHook(
     this.props.route,
     this.routerWillLeave
     )
     }
     },*/
    /*routerWillLeave:function(){
     return confirm("Leave without saving?");
     },*/
    /*onChange: function (event) {
        //console.log('eee');
        /*this.setState({
         dirty:true
         });
        //console.log(document.getElementById('save_btn').value);
        var data=[];
        var field = event.target.name;
        var value = event.target.value;
        data[field] = value;
        this.setState({
        	author:data
        });
        this.forceUpdate();

        return this.setState({author: this.state.author});

        //console.log(this.state.dirty);
    },*/
    saveAuthor: function (author) {
        axios.post('http://localhost:3001/api/data', author);
        return author;
    },


    saveData: function (e) {

        e.preventDefault();
        /*
         this.state.dirty=false;
         console.log(this.state.dirty);*/
        var data={};
        data['firstName']=e.target.firstName.value;
        data['lastName']=e.target.lastName.value;
        data['age'] = e.target.age.value;
        this.setState({
        	author:data
        },()=>{
        	var validForm = true;
        this.state.errors = {
            firstName: '', lastName: '', age: ''/*,profile:''*/
        };
       // console.log(this.state.author);
        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First Name must be atleast 3 characters!';
            validForm = false;
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last Name must be atleast 3 characters!';
            validForm = false;
        }
        if (this.state.author.age === 0 || this.state.author.age.length > 2) {
            this.state.errors.age = 'Enter valid age!';
            validForm = false;
        }
        /*if(this.state.author.profile.length==0){
         this.state.errors.profile='Please select profile image';
         validForm=false;
         }*/
        //console.log(this.state.errors);
        if (!validForm) {
            toastr.warning('Warning:Can not save data:' + (this.state.errors.firstName !== '' ? '<br/>' : '') + this.state.errors.firstName + (this.state.errors.lastName !== '' ? '<br/>' : '') + this.state.errors.lastName + (this.state.errors.age !== '' ? '<br/>' : '') + this.state.errors.age/*+(this.state.errors.profile != ''?'<br/>':'')+this.state.errors.profile*/);

            return;
        }

        if (this.saveAuthor(this.state.author)) {
            toastr.success('Author added successfully !'); // display notification toast
        }

        //console.log(this.props.router);
        browserHistory.push('authors');//redirect to author page
        });
        
        /*var str=e.target.profile.value;
         var index = str.lastIndexOf("\\");
         this.state.author.profile = str.substr(index+1);
         console.log(this.state.author.profile);*/
        


        //AuthorsList.authors.push(data);

    },
    render: function () {
        return (
            <div>
                <AuthorForm author={this.state.author} onSave={this.saveData}
                           />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;