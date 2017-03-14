import React from 'react';
import AuthorsList from'./authorList';
import {Link} from 'react-router'
import axios from 'axios';
import toastr from 'toastr';

class Authors extends React.Component{
	constructor(props) {
          super(props);
          //this.handleChange = this.handleChange.bind(this)
          this.state = {
                authors:[],
                count:0
          };
          this.deleteAuthor=this.deleteAuthor.bind(this);
        }
	componentWillMount() {
      axios.get('http://localhost:3001/api/data')
		 .then(res => {
		 	this.setState({authors: res.data });
		 });
   }
	
	deleteAuthor(id){
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
	}
	
	componentDidMount(){
		
		//this.forceUpdate();
		axios.get('http://localhost:3001/api/data')
		 .then(res => {
		 	this.setState({authors: res.data });
		 })
	}
	/*
	clickHere:function(){
		this.setState({count:this.state.count + 1},()=>{
			this.setState({count:this.state.count + 1},()=>{
				this.setState({count:this.state.count + 1});
			})
		});
		console.log(this.state.count);
	},*/
	render() {
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
}

export default Authors;