import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {createStoreUser} from '../../store/actions/StoreAction'

class store extends Component {

    constructor(props) {
		super(props)
		this.state = {
			name :'',
            code : '',
            address : ''
		}
	}

    handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.id] : e.target.value
		})
    }
    
    handleSubmit = (e) => {
		e.preventDefault();
        console.log(this.state);
        this.props.createStoreUser(this.state)
	}

    render() {
        return (
            <div>
                <h1>Create/Register Store</h1>
                <form Validate onSubmit={this.handleSubmit} >
                    <TextField
                        id="name"
                        label="Name"
                        style={{margin: 8,maxWidth:700}}
                        placeholder="enter your name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                        onChange = {this.handleChange}
                    />
                    <TextField
                        id="code"
                        label="Code"
                        style={{margin: 8,maxWidth:700}}
                        placeholder="enter your code"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                        onChange = {this.handleChange}
                    />
                    <TextField
                        id="address"
                        label="Address"
                        style={{margin: 8,maxWidth:700}}
                        placeholder="enter your address"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                        onChange = {this.handleChange}
                    /><br/>
                    <Button variant="contained" type="submit" style={{width:700}} color="primary">
                        Create/Register
                    </Button>
                </form>
            </div>
        )
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        createStoreUser:(creds) => dispatch(createStoreUser(creds))
    }
}

const mapStateToProps = (state) => {
    return {
		storeResponse:state.store.storeResponse
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(store);