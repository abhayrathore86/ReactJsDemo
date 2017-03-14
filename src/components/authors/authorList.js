import React from'react';
import {Link} from 'react-router'

class AuthorsList extends React.Component{
	
	render() {
		//var i=0;

		var createAuthorRow=function(author,i){
			return (
					<tr key={author.id+"_"+i}>
					<td>{++i}</td>
					
					{/*<td><img src={'/images/'+author.profile_url} alt='profile' width='100' height='100'/></td>*/}
					<td>{author.firstName} {author.lastName}</td>
					<td>{author.age}</td>
					<td><Link to={"/authorUpdate/"+author._id}><button className="btn btn-info">Update</button></Link>
					{" 	"}
					<button className="btn btn-danger" onClick={()=>this.props.deleteAuthor(author._id)} >Delete</button></td>
					</tr>
				);
		};
		return (
			<div>
				<table className='table'>
				<thead>
				<tr>
					<th>Sr. No.</th>
					{/*<th>Profile Image</th>*/}
					<th>Name</th>
					<th>Age</th>
					<th>Action</th>

				</tr>
				</thead>
				<tbody>
				{this.props.authors !== undefined && this.props.authors.map(createAuthorRow,this)}
				</tbody>
				</table>
			</div>
		);
	}
}

export default AuthorsList;