import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { connect } from 'react-redux';
import "./SignUp.css";
import axios from "axios";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onVerifyPasswordChange = this.onVerifyPasswordChange.bind(this);
        this.userSignUp = this.userSignUp.bind(this);
        this.state = {
            modal: false
        };
    }

    userSignUp() {
        if (this.props.userDetailsReducer.username.length && this.props.userDetailsReducer.password.length) {
            if (this.props.userDetailsReducer.password === this.props.userDetailsReducer.verifyPassword) {
                axios.post("userSignUp", { userDetails: this.props.userDetailsReducer }).then((result) => {
                    console.log(result.data);
                    axios.post("userLogIn", { userDetails: this.props.userDetailsReducer }).then((result2) => {
                        if (result.data.duplicateCheck) {
                            alert(result.data.message);
                        } else {
                            localStorage.setItem('token', result2.data.myToken);
                            alert("You have successfull signed up and have been automatically logged in!");
                            this.setState({
                                modal: !this.state.modal
                            });
                        }
                    })
                })
            } else {
                alert("Passwords don't match!");
            }
        } else {
            alert("Username and/or Passsword can't be blank");
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onUsernameChange(e) {
        this.props.dispatch({
            type: "onUsernameChange",
            username: e.target.value
        })
    }

    onPasswordChange(e) {
        this.props.dispatch({
            type: "onPasswordChange",
            password: e.target.value
        })
    }

    onVerifyPasswordChange(e) {
        this.props.dispatch({
            type: "onVerifyPasswordChange",
            verifyPassword: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Sign Up</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
                    <ModalBody>
                        <p>Username:</p>
                        <Input type="text" placeholder="username" onChange={this.onUsernameChange} />
                        <p>Password:</p>
                        <Input type="password" placeholder="password" onChange={this.onPasswordChange} />
                        <p>Re-Type Password:</p>
                        <Input type="password" placeholder="re-type password" onChange={this.onVerifyPasswordChange} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.userSignUp}>Sign Up</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect((state) => (state))(SignUp);