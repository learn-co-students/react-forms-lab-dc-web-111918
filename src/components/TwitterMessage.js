import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChangeInput(event){
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>Characters left: {140 - this.state.text.length}</div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} onChange={e => this.handleChangeInput(e)}/>
      </div>
    );
  }
}

export default TwitterMessage;
