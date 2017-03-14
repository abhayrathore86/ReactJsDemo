import axios from 'axios'
var a=axios.get('http://localhost:3001/api/data')
		 .then(res => {
		 	//console.log(res.data)
		 	return res.data;

		 })
export {a};