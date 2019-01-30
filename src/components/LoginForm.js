import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (username !== '' && password !== '') {
      this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={(e)=> this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={e => this.handleChange(e)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={e => this.handleChange(e)} />
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
