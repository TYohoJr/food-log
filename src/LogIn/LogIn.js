import React from 'react';
import "./LogIn.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { connect } from 'react-redux';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.showPasword = this.showPasword.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.state = {
      modal: false,
      showPasswordText:"password",
      username:"",
      password:""
    };
  }

  toggle() {
    console.log(this.props.userLoginReducer);
    this.setState({
      modal: !this.state.modal
    });
  }

  showPasword(){
    if(this.state.showPasswordText === "password"){
      this.setState({
        showPasswordText:"text"
      })
    } else {
      this.setState({
        showPasswordText:"password"
      })
    }
   
  }

  onUsernameChange(e){
    this.props.dispatch({
      type:"onUsernameChange",
      username:e.target.value
    })
  }

  onPasswordChange(e){
    this.props.dispatch({
      type:"onPasswordChange",
      password:e.target.value
    })
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
          <ModalBody>
            <p>Username:</p>
            <Input className="log-in-input" type="text" placeholder="username" onChange={this.onUsernameChange}/>
            <p>Password:</p>
            <Input className="log-in-input" type={this.state.showPasswordText} placeholder="password" onChange={this.onPasswordChange}/>
            <span id="checkbox-div"><Input type="checkbox" onClick={this.showPasword}/>{' Show Password '}</span>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Log In</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect((state) => (state))(LogIn);