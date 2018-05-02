import React, { Component } from 'react';
import LinkButton from '../../components/LinkButton';
import ActionButton from '../../components/ActionButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loggingIn: false
    }
  }

  handleState = (field) => {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  };

  handleSubmit = () => {
    console.log(this.state);
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    console.log("Form state::: ",this.state);
    return (
      <div className="App">

        <div className="sign-in">
          <input type="text" name="username" placeholder="Email Or Phone"
          onChange={this.handleState('username')} value={this.state.username}/>
          <input type="password" name="password" placeholder="Password"
          onChange={this.handleState('password')} value={this.state.password}/>
          <div className="submit-buttons">
            <ActionButton action={this.handleSubmit} classname='log-in-button' actionText='Log In'/>
            <ActionButton action={this.handleSubmit} classname='sign-up-button' actionText='Sign up'/>
          </div>
          <a href="" className="forgot-password">Forgot your password? Reset It Here</a>
        </div>

        <h3>OR</h3>

        <LinkButton classname="facebook-login" href="/causes" linkText={'log in with facebook'}/>

      </div>
    );
  }
}

export default App;
