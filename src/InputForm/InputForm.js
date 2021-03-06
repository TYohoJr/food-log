import React from 'react';
import "./InputForm.css";
import { connect } from 'react-redux';
import { Input, Button } from "reactstrap";
import axios from "axios";

class InputForm extends React.Component {
    constructor() {
        super();
        this.searchAPI = this.searchAPI.bind(this);
        this.onAPISearchParameterChange = this.onAPISearchParameterChange.bind(this);
        this.state = {
            apiSearchParameter: ''
        }
    }

    // axios.post('/findRoute', { token: localStorage.getItem("token") }).then((result) => {

    searchAPI() {
        axios.post("/searchAPI", { token: localStorage.getItem("token"), searchParameter: this.state.apiSearchParameter }).then((result) => {
            if (result.data.noToken) {
                alert(result.data.message);
            } else {
                console.log(result.data)
            }
        })
        console.log(this.state.apiSearchParameter);
    }

    onAPISearchParameterChange(e) {
        this.setState({
            apiSearchParameter: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Input id="api-search-input" type="text" placeholder="search for food" onChange={this.onAPISearchParameterChange} />
                <Button onClick={this.searchAPI}>Search</Button>
            </div>
        )
    }
}

export default connect((state) => (state))(InputForm);