import React from'react';
import {BootstrapTable,TableHeaderColumn} from'react-bootstrap-table';

import axios from 'axios';



class Test extends React.Component {
    constructor(props) {
          super(props);
          //this.handleChange = this.handleChange.bind(this)
          this.state = {
                data:[]
          };
        }
    render(){
        axios.get('http://localhost:3001/api/data')
         .then(res => {
            this.setState({
                data:res.data
            });

         });
           const options = {
      page: 1,  // which page you want to show as default
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      },{
        text: '15', value: 15
      },{
        text: '20', value: 20
      },{
        text: '25', value: 25
      },{
        text: 'All', value: this.state.data.length
      } ], // you can change the dropdown list for size per page
      sizePerPage: 10,  // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 4,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      clearSearch: true,

      };
       const selectRow = {
    mode: 'checkbox',  // multi select
     bgColor: '#eeffcc',
       showOnlySelected: true
  };
    const cellEdit = {
    mode: 'dbclick', // click cell to edit
     blurToSave: true,
  };
          
        return (
            <BootstrapTable data={this.state.data}  hover={true}  search={ true } pagination={ true } options={options} striped  selectRow={ selectRow } cellEdit={cellEdit}>
                <TableHeaderColumn dataField="_id" isKey={true} searchable={false} dataAlign="center" dataSort={true} width="300px">ID</TableHeaderColumn>
                <TableHeaderColumn dataField="firstName" dataSort={true} dataAlign="center" width="150px">First Name</TableHeaderColumn>
                 <TableHeaderColumn dataField="lastName" dataSort={true} dataAlign="center" width="150px">Last Name</TableHeaderColumn>
                <TableHeaderColumn dataField="age" dataSort={true} dataAlign="center" width="150px" editable={ { type: 'textarea' } }>Age</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default Test;

