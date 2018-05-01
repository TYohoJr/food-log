import React from 'react';
import "./InputForm.css";
import { connect } from 'react-redux';
import { Input, Button } from "reactstrap";

class InputForm extends React.Component {

    // axios.post('/findRoute', { token: localStorage.getItem("token") }).then((result) => {

    // localStorage.setItem('token', result.data.myToken);


    render() {
        return (
            <div>
                <Input type="text" />
                <Button>Search</Button>
            </div>
        )
    }
}

export default connect((state) => (state))(InputForm);