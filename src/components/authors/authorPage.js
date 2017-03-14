var React=require('react');
var AuthorsList=require('./authorList');
import {Link,browserHistory} from 'react-router'
import axios from 'axios';
var toastr = require('toastr');

var Authors=React.createClass({
	componentWillMount:function() {
      axios.get('http://localhost:3001/api/data')
		 .then(res => {
		 	this.setState({authors: res.data });
		 })

   },
	getInitialState:function(){
		return {
			authors:[],
			count:0
		}
	},
	deleteAuthor:function(id){
		if(confirm("Do you really want to delete this author?")){
			axios.delete('http://localhost:3001/api/data?id='+id)
		 .then(res => {
		 	toastr.success(res.data);
			 axios.get('http://localhost:3001/api/data')
			 .then(response => {
			 	this.setState({authors: response.data });
			 })

		 	//window.location.reload();
		 	//browserHistory.push('/authors/');
		 })
		}
	},
	
	componentDidMount:function(){
		
		//this.forceUpdate();
		axios.get('http://localhost:3001/api/data')
		 .then(res => {
		 	this.setState({authors: res.data });
		 })
	},
	/*
	clickHere:function(){
		this.setState({count:this.state.count + 1},()=>{
			this.setState({count:this.state.count + 1},()=>{
				this.setState({count:this.state.count + 1});
			})
		});
		console.log(this.state.count);
	},*/
	render: function() {
		//this.forceUpdate();
		return (
			<div>
				<h1>Authors</h1>
				{/*<button onClick={this.clickHere}>Click</button>
								{this.state.count}*/}
				<Link to='/addAuthor'><button className='btn btn-success'>Add Author</button></Link>
				<AuthorsList authors={this.state.authors} deleteAuthor={this.deleteAuthor}/>
			</div>
		);
	}
});

module.exports=Authors;