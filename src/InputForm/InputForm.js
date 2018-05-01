import React from 'react';
import "./InputForm.css";
import { connect } from 'react-redux';
import { Input, Button } from "reactstrap";

class InputForm extends React.Component {
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