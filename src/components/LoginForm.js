import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  preSubmit = (e) => {
    e.preventDefault()
    if ((this.state.username != "") && (this.state.password != "")){
      console.log("made it")
      this.props.onSubmit(this.state)
    }
  }

  handleChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })

  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })

  }

  render() {
    return (
      <form onSubmit={this.preSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChangeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChangePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

//onSubmit
