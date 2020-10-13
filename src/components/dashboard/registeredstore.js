import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {loadStoreUser} from '../../store/actions/StoreAction';
import { connect } from 'react-redux';

class registeredstore extends Component {

    constructor(props)
    {
        super(props)
        
    }

    componentDidMount = () =>{
        const page = "";
        this.props.loadStoreUser(page);
      }

    render() {

        const {loadStores} = this.props;

        return (
            <div>
                <TableContainer >
				  <Table aria-label="simple table">
					<TableHead>
					  <TableRow>
						<TableCell align="left">Name</TableCell>
						<TableCell align="left">Code</TableCell>
						<TableCell align="left">Address</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  {loadStores ? loadStores.data.data.map(row => (
						<TableRow key={row.id}>
						  <TableCell align="left">{row.name}</TableCell>
						  <TableCell align="left">{row.code}</TableCell>
						  <TableCell align="left">{row.address}</TableCell>
						</TableRow>
					  ))
					  :null
					  }
					</TableBody>
				  </Table>
				</TableContainer>
            </div>
        );
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        loadStoreUser:(page) => dispatch(loadStoreUser(page))	
    }
}

const mapStateToProps = (state) => {
    return {
		loadStores:state.store.loadStores
    }
}
 
export default connect(mapStateToProps,mapDisPatchToProps)(registeredstore);